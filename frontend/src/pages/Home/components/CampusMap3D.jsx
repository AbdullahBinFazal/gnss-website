'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styles from './CampusMap3D.module.css';

// ═══════════════════════════════════════════════════════════════════════════════
// IST Campus Coordinates
// ═══════════════════════════════════════════════════════════════════════════════
const IST_LAT = 33.5194;
const IST_LON = 73.1775;

// ═══════════════════════════════════════════════════════════════════════════════
// PANORAMA DATA - 7 Images in Sequence (Walking Tour)
// ═══════════════════════════════════════════════════════════════════════════════
const PANORAMA_DATA = [
  { id: 1, image: '/panoramas/image_1.jpeg', name: '📍 Main Gate Entrance', description: 'Welcome to IST Campus' },
  { id: 2, image: '/panoramas/image_2.jpeg', name: '📍 Raza Block Front', description: 'Main Academic Building' },
  { id: 3, image: '/panoramas/image_3.jpeg', name: '📍 IST Library', description: 'Central Library' },
  { id: 4, image: '/panoramas/image_4.jpeg', name: '📍 Cafeteria Area', description: 'Food & Dining' },
  { id: 5, image: '/panoramas/image_5.jpeg', name: '📍 SUPARCO HQ View', description: 'Space Agency Headquarters' },
  { id: 6, image: '/panoramas/image_6.jpeg', name: '📍 Admin Block', description: 'University Administration' },
  { id: 7, image: '/panoramas/image_7.jpeg', name: '📍 IST Mosque', description: 'Prayer Hall' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// OSM Data Integration - Parse building footprints from OSM
// ═══════════════════════════════════════════════════════════════════════════════
const OSM_DATA = {
  "version": 0.6,
  "generator": "Overpass API 0.7.62.11 87bfad18",
  "osm3s": {
    "timestamp_osm_base": "2026-07-27T05:43:05Z",
    "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL."
  },
  "elements": [
    {
      "type": "way",
      "id": 544755786,
      "nodes": [
        258940668, 258940661, 5265675809, 6767271676, 5265675810,
        5265675811, 7306487711, 7306487712, 7306487713, 7306487714,
        7306487715, 7306487716, 10673957123, 10673957127, 10673957124,
        10673957122, 7306487717, 5265675812, 258677043, 258693498,
        258694084, 258698585, 7306487718, 258698878, 258699028,
        258699194, 258699399, 258699501, 258699820, 258694894,
        5265675813, 5265675814, 5265675815, 5265675816, 5265675817,
        5265675818, 5265675819, 5265675820, 2791948581, 2791948583,
        2791948589, 2791950698, 2791950700, 2791948585, 5265676121,
        5265676122, 5265676123, 5265676124, 5265676125, 5265676126,
        5265676127, 5265676128, 3143604434, 258940668
      ],
      "tags": {
        "addr:city": "اسلام آباد",
        "addr:city:en": "Islamabad",
        "addr:city:fr": "Islamabad",
        "addr:city:pa": "ਇਸਲਾਮਾਬਾਦ",
        "addr:city:pnb": "اسلام آباد",
        "addr:city:ur": "اسلام آباد",
        "addr:place": "Rawat Toll Plaza",
        "addr:postcode": "44000",
        "addr:street": "Islamabad Expressway",
        "addr:street:ur": "اسلام آباد بزرگراه",
        "alt_name": "Space & Upper Atmosphere Research Commission Headquarters",
        "amenity": "research_institute",
        "branch": "Headquarters",
        "branch:short": "Headquarters",
        "landuse": "military",
        "name": "Space & Upper Atmosphere Research Commission",
        "nohousenumber": "yes",
        "official_name": "Pakistan Space & Upper Atmosphere Research Commission",
        "short_name": "SUPARCO;SUPARCO HQ",
        "wikidata": "Q2502839"
      }
    },
    {
      "type": "way",
      "id": 1146695610,
      "nodes": [10670914804, 10670928405, 10670928406, 10670928407, 10670928408, 10670928409, 10670914804],
      "tags": { "building": "yes", "name": "Security Staff Hostel IST" }
    },
    {
      "type": "way",
      "id": 1146695611,
      "nodes": [10670928410, 10670928411, 10670928412, 10670928413, 10670928410],
      "tags": { "building": "yes" }
    },
    {
      "type": "way",
      "id": 1146695612,
      "nodes": [10670928414, 10670928415, 10670928416, 10670928417, 10670928418, 10670928419, 10670928420, 10670928421, 10670928414],
      "tags": { "building": "yes", "name": "Bachelor Hostel" }
    }
  ]
};

// ── Parse OSM Nodes ──────────────────────────────────────────────────────────
function parseOSMData(osmData) {
  const nodeMap = {};
  const buildings = [];
  
  osmData.elements
    .filter(el => el.type === 'node')
    .forEach(node => {
      nodeMap[node.id] = { lat: node.lat, lon: node.lon };
    });
  
  osmData.elements
    .filter(el => el.type === 'way' && el.tags && el.tags.building === 'yes')
    .forEach(way => {
      const nodes = way.nodes
        .filter(id => nodeMap[id])
        .map(id => nodeMap[id]);
      
      if (nodes.length >= 3) {
        buildings.push({
          name: way.tags.name || 'Unnamed Building',
          nodes: nodes,
          footprint: nodes.map(n => ({ lat: n.lat, lon: n.lon })),
          type: way.tags.building || 'building',
        });
      }
    });
  
  return { nodeMap, buildings };
}

function latLonTo3D(lat, lon, centerLat, centerLon) {
  const scale = 111320;
  const x = (lon - centerLon) * scale * Math.cos(centerLat * Math.PI / 180);
  const z = (lat - centerLat) * scale;
  return { x, z };
}

function createBuildingFromOSM(nodes, centerLat, centerLon, heightM, M) {
  if (!nodes || nodes.length < 3) return null;
  
  const points = nodes.map(n => {
    const pos = latLonTo3D(n.lat, n.lon, centerLat, centerLon);
    return { x: pos.x * M, z: pos.z * M };
  });
  
  const shape = new THREE.Shape();
  points.forEach((p, i) => {
    if (i === 0) shape.moveTo(p.x, p.z);
    else shape.lineTo(p.x, p.z);
  });
  shape.closePath();
  
  const height = heightM * M || 0.01;
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: height,
    bevelEnabled: true,
    bevelThickness: 0.0002,
    bevelSize: 0.0001,
    bevelSegments: 2,
  });
  
  geometry.computeBoundingBox();
  const center = geometry.boundingBox.getCenter(new THREE.Vector3());
  geometry.translate(-center.x, 0, -center.z);
  
  return { geometry, points, centerX: 0, centerZ: 0 };
}

// ═══════════════════════════════════════════════════════════════════════════════
// Procedural Texture Generators
// ═══════════════════════════════════════════════════════════════════════════════

function createConcreteTexture(width = 512, height = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  const baseColor = [195, 190, 180];
  ctx.fillStyle = `rgb(${baseColor[0]},${baseColor[1]},${baseColor[2]})`;
  ctx.fillRect(0, 0, width, height);
  
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 40;
    data[i] = Math.max(0, Math.min(255, data[i] + noise));
    data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise * 0.9));
    data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise * 0.85));
  }
  ctx.putImageData(imageData, 0, 0);
  
  for (let i = 0; i < 2500; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = 1 + Math.random() * 4;
    const brightness = 100 + Math.random() * 100;
    ctx.fillStyle = `rgba(${brightness},${brightness},${brightness},${0.08 + Math.random() * 0.15})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  
  for (let i = 0; i < 60; i++) {
    const y = Math.random() * height;
    const x = Math.random() * width * 0.3;
    ctx.strokeStyle = `rgba(175,170,160,${0.02 + Math.random() * 0.04})`;
    ctx.lineWidth = 1 + Math.random() * 3;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 80 + Math.random() * 120, y + (Math.random() - 0.5) * 5);
    ctx.stroke();
  }
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 3);
  texture.anisotropy = 8;
  return texture;
}

function createBrickTexture(width = 512, height = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#c4b8a8';
  ctx.fillRect(0, 0, width, height);
  
  const brickW = 55, brickH = 22;
  const cols = Math.ceil(width / brickW);
  const rows = Math.ceil(height / brickH);
  
  for (let row = 0; row < rows; row++) {
    const offset = row % 2 === 0 ? 0 : brickW / 2;
    for (let col = 0; col < cols + 1; col++) {
      const x = col * brickW + offset;
      const y = row * brickH;
      
      const r = 145 + Math.random() * 50;
      const g = 85 + Math.random() * 35;
      const b = 55 + Math.random() * 30;
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      
      const bx = x + 2, by = y + 2, bw = brickW - 4, bh = brickH - 4;
      const radius = 2;
      ctx.beginPath();
      ctx.moveTo(bx + radius, by);
      ctx.lineTo(bx + bw - radius, by);
      ctx.quadraticCurveTo(bx + bw, by, bx + bw, by + radius);
      ctx.lineTo(bx + bw, by + bh - radius);
      ctx.quadraticCurveTo(bx + bw, by + bh, bx + bw - radius, by + bh);
      ctx.lineTo(bx + radius, by + bh);
      ctx.quadraticCurveTo(bx, by + bh, bx, by + bh - radius);
      ctx.lineTo(bx, by + radius);
      ctx.quadraticCurveTo(bx, by, bx + radius, by);
      ctx.fill();
      
      if (Math.random() > 0.6) {
        ctx.fillStyle = `rgba(0,0,0,${0.03 + Math.random() * 0.06})`;
        ctx.fillRect(bx + 5, by + 4, bw - 10, bh - 8);
      }
    }
  }
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  texture.anisotropy = 8;
  return texture;
}

function createWeatheringTexture(width = 512, height = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  ctx.clearRect(0, 0, width, height);
  
  for (let i = 0; i < 400; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = 2 + Math.random() * 20;
    const alpha = 0.02 + Math.random() * 0.08;
    const brightness = 50 + Math.random() * 70;
    ctx.fillStyle = `rgba(${brightness},${brightness},${brightness},${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height * 0.2;
    const len = 30 + Math.random() * 80;
    ctx.strokeStyle = `rgba(90,90,90,${0.02 + Math.random() * 0.05})`;
    ctx.lineWidth = 2 + Math.random() * 5;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + (Math.random() - 0.5) * 10, y + len);
    ctx.stroke();
  }
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  return texture;
}

function createGlassTexture(width = 512, height = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = 'rgba(70, 110, 150, 0.1)';
  ctx.fillRect(0, 0, width, height);
  
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const w = 15 + Math.random() * 100;
    const h = 1 + Math.random() * 5;
    ctx.fillStyle = `rgba(255,255,255,${0.02 + Math.random() * 0.05})`;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((Math.random() - 0.5) * 0.6);
    ctx.fillRect(-w/2, -h/2, w, h);
    ctx.restore();
  }
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  return texture;
}

const concreteTex = createConcreteTexture();
const brickTex = createBrickTexture();
const weatheringTex = createWeatheringTexture();
const glassTex = createGlassTexture();

// ═══════════════════════════════════════════════════════════════════════════════
// Constants & Utilities
// ═══════════════════════════════════════════════════════════════════════════════

const METERS_PER_UNIT = 490;
const M = 1 / METERS_PER_UNIT;

function latLonToTile(lat, lon, z) {
  const x = Math.floor((lon + 180) / 360 * Math.pow(2, z));
  const latR = lat * Math.PI / 180;
  const y = Math.floor(
    (1 - Math.log(Math.tan(latR) + 1 / Math.cos(latR)) / Math.PI) / 2 * Math.pow(2, z)
  );
  return { x, y };
}

const LAYER_URLS = {
  satellite: (x,y,z)=>`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}`,
  map: (x,y,z)=>`https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/${z}/${y}/${x}`,
  terrain: (x,y,z)=>`https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/${z}/${y}/${x}`,
  labels: (x,y,z)=>`https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/${z}/${y}/${x}`,
  wayback2014: (x,y,z)=>`https://wayback.maptiles.arcgis.com/arcgis/rest/services/world_imagery/wmts/1.0.0/default028mm/mapserver/tile/10/${z}/${y}/${x}`,
};

async function fetchWeather(lat, lon) {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&current=temperature_2m,weathercode,windspeed_10m,relative_humidity_2m`,
      { signal: AbortSignal.timeout(6000) }
    );
    const d = await res.json();
    const c = d.current;
    const wmap = { 0:'☀️ Clear',1:'🌤️ Mostly Clear',2:'⛅ Partly Cloudy',3:'☁️ Overcast',
      45:'🌫️ Foggy',51:'🌦️ Drizzle',61:'🌧️ Rain',71:'❄️ Snow',80:'🌧️ Showers',95:'⛈️ Thunderstorm' };
    return { temp:Math.round(c.temperature_2m), desc:wmap[c.weathercode]||wmap[Math.floor(c.weathercode/10)*10]||'🌡️',
      wind:Math.round(c.windspeed_10m), hum:c.relative_humidity_2m };
  } catch { return null; }
}

function easeInOutCubic(t) { return t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2; }

function crispTexture(c) {
  const t=new THREE.CanvasTexture(c);
  if('colorSpace' in t) t.colorSpace=THREE.SRGBColorSpace;
  t.minFilter=THREE.LinearMipmapLinearFilter;
  t.magFilter=THREE.LinearFilter;
  t.generateMipmaps=true;
  t.anisotropy=8;
  return t;
}

function makeCanvasTexture(lines, w=512, h=256) {
  const c=document.createElement('canvas');
  c.width=w;
  c.height=h;
  const ctx=c.getContext('2d');
  ctx.clearRect(0,0,w,h);
  lines.forEach(({text,font,color,y})=>{
    ctx.font=font;
    ctx.textAlign='center';
    ctx.strokeStyle='rgba(0,0,0,0.8)';
    ctx.lineWidth=4;
    ctx.strokeText(text,w/2,y);
    ctx.fillStyle=color;
    ctx.fillText(text,w/2,y);
  });
  return crispTexture(c);
}

function makeISTLogoTexture() {
  const W=1024, H=320;
  const c=document.createElement('canvas');
  c.width=W;
  c.height=H;
  const ctx=c.getContext('2d');
  ctx.fillStyle='#ffffff';
  ctx.fillRect(0,0,W,H);
  const gCX=140, gCY=H/2, gR=118;
  const globeGrad=ctx.createRadialGradient(gCX-30,gCY-30,10,gCX,gCY,gR);
  globeGrad.addColorStop(0,'#1a6cc8');
  globeGrad.addColorStop(0.55,'#0a4fa0');
  globeGrad.addColorStop(1,'#04215a');
  ctx.beginPath();
  ctx.arc(gCX,gCY,gR,0,Math.PI*2);
  ctx.fillStyle=globeGrad;
  ctx.fill();
  ctx.save();
  ctx.beginPath();
  ctx.arc(gCX,gCY,gR,0,Math.PI*2);
  ctx.clip();
  const swooshAngles=[0.72,0.80,0.88,0.96];
  swooshAngles.forEach((off,i)=>{
    const thickness=i===0?14:i===1?12:i===2?10:8;
    const alpha=i===0?1:i===1?0.82:i===2?0.65:0.5;
    ctx.strokeStyle=`rgba(255,255,255,${alpha})`;
    ctx.lineWidth=thickness;
    ctx.save();
    ctx.translate(gCX,gCY);
    ctx.rotate(-Math.PI*0.28);
    const ry=gR*(0.3+i*0.12);
    ctx.scale(1.8,0.55);
    ctx.arc(0,ry*0.9,gR*0.85,Math.PI*1.1,Math.PI*1.85);
    ctx.stroke();
    ctx.restore();
  });
  ctx.restore();
  ctx.save();
  ctx.beginPath();
  ctx.arc(gCX,gCY,gR,0,Math.PI*2);
  ctx.clip();
  ctx.strokeStyle='rgba(255,255,255,0.4)';
  ctx.lineWidth=3;
  ctx.beginPath();
  ctx.moveTo(gCX-gR,gCY);
  ctx.lineTo(gCX+gR,gCY);
  ctx.stroke();
  ctx.restore();
  ctx.beginPath();
  ctx.arc(gCX,gCY,gR,0,Math.PI*2);
  ctx.strokeStyle='rgba(10,50,120,0.3)';
  ctx.lineWidth=4;
  ctx.stroke();
  const mX=310, mY=H/2+10;
  ctx.font='bold 110px Arial';
  ctx.textBaseline='middle';
  ctx.fillStyle='#00b4d8';
  ctx.fillText('i',mX,mY);
  ctx.fillStyle='#1a237e';
  ctx.fillText('s',mX+60,mY);
  ctx.fillStyle='#0077b6';
  ctx.fillText('t',mX+130,mY);
  const nX=490, nY1=H/2-34, nY2=H/2+8, nY3=H/2+50;
  ctx.textBaseline='alphabetic';
  ctx.font='bold 38px Arial';
  ctx.fillStyle='#0d1b5e';
  ctx.fillText('Institute of',nX,nY1);
  ctx.fillText('Space Technology',nX,nY2);
  ctx.font='bold 28px Arial';
  ctx.fillStyle='#2a5298';
  ctx.fillText('ISLAMABAD',nX,nY3);
  ctx.strokeStyle='#c0c8e0';
  ctx.lineWidth=2;
  ctx.beginPath();
  ctx.moveTo(472,H*0.15);
  ctx.lineTo(472,H*0.85);
  ctx.stroke();
  return crispTexture(c);
}

function makeNameLabel(name, w=1024, h=256) {
  const c=document.createElement('canvas');
  c.width=w;
  c.height=h;
  const ctx=c.getContext('2d');
  ctx.fillStyle='rgba(10,14,30,0.82)';
  const r=24;
  ctx.beginPath();
  ctx.moveTo(r,0);
  ctx.lineTo(w-r,0);
  ctx.quadraticCurveTo(w,0,w,r);
  ctx.lineTo(w,h-r);
  ctx.quadraticCurveTo(w,h,w-r,h);
  ctx.lineTo(r,h);
  ctx.quadraticCurveTo(0,h,0,h-r);
  ctx.lineTo(0,r);
  ctx.quadraticCurveTo(0,0,r,0);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle='rgba(147,197,253,0.5)';
  ctx.lineWidth=6;
  ctx.stroke();
  ctx.font='bold 72px Arial';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  ctx.strokeStyle='rgba(0,0,0,0.85)';
  ctx.lineWidth=8;
  ctx.strokeText(name,w/2,h/2);
  ctx.fillStyle='#f1f5f9';
  ctx.fillText(name,w/2,h/2);
  return crispTexture(c);
}

function makeRazaHighlightLabel(w=1024, h=256) {
  const c=document.createElement('canvas');
  c.width=w;
  c.height=h;
  const ctx=c.getContext('2d');
  ctx.fillStyle='rgba(20,14,2,0.9)';
  const r=28;
  ctx.beginPath();
  ctx.moveTo(r,0);
  ctx.lineTo(w-r,0);
  ctx.quadraticCurveTo(w,0,w,r);
  ctx.lineTo(w,h-r);
  ctx.quadraticCurveTo(w,h,w-r,h);
  ctx.lineTo(r,h);
  ctx.quadraticCurveTo(0,h,0,h-r);
  ctx.lineTo(0,r);
  ctx.quadraticCurveTo(0,0,r,0);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle='#f5b942';
  ctx.lineWidth=10;
  ctx.stroke();
  ctx.font='bold 88px Arial';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  ctx.fillStyle='#f5b942';
  ctx.fillText('\u2605 RAZA BLOCK', w/2, h/2);
  return crispTexture(c);
}

function makeLegendTexture() {
  const W=600, H=200;
  const c=document.createElement('canvas');
  c.width=W;
  c.height=H;
  const ctx=c.getContext('2d');
  ctx.fillStyle='rgba(4,4,18,0.88)';
  const r=16;
  ctx.beginPath();
  ctx.moveTo(r,0);
  ctx.lineTo(W-r,0);
  ctx.quadraticCurveTo(W,0,W,r);
  ctx.lineTo(W,H-r);
  ctx.quadraticCurveTo(W,H,W-r,H);
  ctx.lineTo(r,H);
  ctx.quadraticCurveTo(0,H,0,H-r);
  ctx.lineTo(0,r);
  ctx.quadraticCurveTo(0,0,r,0);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle='rgba(79,70,229,0.3)';
  ctx.lineWidth=2;
  ctx.stroke();
  
  const categories = [
    { label: 'Academic', color: '#6366f1' },
    { label: 'Admin', color: '#ec4899' },
    { label: 'Main Building', color: '#f5b942' },
    { label: 'Research', color: '#4ECDC4' },
    { label: 'Library', color: '#7c3aed' },
    { label: 'Mosque', color: '#34d399' },
    { label: 'Sports', color: '#fb923c' },
    { label: 'Residential', color: '#a78bfa' },
  ];
  
  ctx.font='14px Arial';
  ctx.textBaseline='middle';
  categories.forEach((cat, i) => {
    const x = 14 + (i % 4) * 145;
    const y = 32 + Math.floor(i / 4) * 70;
    ctx.fillStyle=cat.color;
    ctx.fillRect(x, y-6, 14, 14);
    ctx.fillStyle='#ffffff';
    ctx.fillText(cat.label, x+20, y+1);
  });
  return crispTexture(c);
}

// ══════════════════════════════════════════════════════════════════════════════
// buildRazaBlock
// ══════════════════════════════════════════════════════════════════════════════
function buildRazaBlock(THREE) {
  const S   = 0.00072;
  const grp = new THREE.Group();

  const matConcrete = new THREE.MeshLambertMaterial({ color:0xe6dfcc });
  const matWindow   = new THREE.MeshLambertMaterial({ color:0x11161d });
  const matStep     = new THREE.MeshLambertMaterial({ color:0x9095a0 });
  const matCol      = new THREE.MeshLambertMaterial({ color:0xdcd6c0 });
  const matDiv      = new THREE.MeshLambertMaterial({ color:0x404550 });
  const matGrass    = new THREE.MeshLambertMaterial({ color:0x51882c });
  const matRoad     = new THREE.MeshLambertMaterial({ color:0x30353c });
  const matBrick    = new THREE.MeshLambertMaterial({ color:0x9c553d });
  const matTower    = new THREE.MeshLambertMaterial({ color:0xa8a8a8 });
  const matTrunk    = new THREE.MeshLambertMaterial({ color:0x4a2c11 });
  const matLeaf     = new THREE.MeshLambertMaterial({ color:0x2d5c1e });
  const matLamp     = new THREE.MeshLambertMaterial({ color:0x71797e });

  const L  = 92  * S;
  const H  = 9.5 * S;
  const BD = 18  * S;
  const TD = 15  * S;
  const SL = (BD-TD)/2;

  const shape = new THREE.Shape();
  shape.moveTo(-BD/2,0);
  shape.lineTo(BD/2,0);
  shape.lineTo(TD/2,H);
  shape.lineTo(-TD/2,H);
  shape.lineTo(-BD/2,0);
  const extCfg = { steps:1, depth:L, bevelEnabled:true,
    bevelThickness:0.4*S, bevelSize:0.3*S, bevelOffset:0, bevelSegments:2 };
  const bodyGeo = new THREE.ExtrudeGeometry(shape, extCfg);
  bodyGeo.center();
  const body = new THREE.Mesh(bodyGeo, matConcrete);
  body.rotation.y = Math.PI/2;
  body.castShadow = body.receiveShadow = true;
  grp.add(body);

  const bodyEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(bodyGeo, 20),
    new THREE.LineBasicMaterial({ color:0x7d7666, transparent:true, opacity:0.85 })
  );
  body.add(bodyEdges);
  const matPlinth = new THREE.MeshLambertMaterial({ color:0xb8b09a });
  const plinth = new THREE.Mesh(new THREE.BoxGeometry(L+1.5*S, 0.7*S, BD+1.5*S), matPlinth);
  plinth.position.set(0, -H/2+0.35*S, 0);
  plinth.receiveShadow=true;
  grp.add(plinth);
  const contactShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(L+14*S, BD+14*S),
    new THREE.MeshBasicMaterial({ color:0x000000, transparent:true, opacity:0.22, depthWrite:false })
  );
  contactShadow.rotation.x=-Math.PI/2;
  contactShadow.position.y=-H/2+0.00015;
  grp.add(contactShadow);

  const wallTilt = Math.atan2(SL, H);

  const matSill = new THREE.MeshLambertMaterial({ color:0xcfc8b2 });
  const wHU = 6.0*S, wZU = BD/2 - wHU*(SL/H) - 0.55*S;
  const upWin = new THREE.Mesh(new THREE.BoxGeometry(L-8*S, 1.8*S, 1.3*S), matWindow);
  upWin.position.set(0, wHU-H/2, wZU);
  upWin.rotation.x=-wallTilt;
  grp.add(upWin);
  const upSill = new THREE.Mesh(new THREE.BoxGeometry(L-7.5*S, 0.3*S, 1.5*S), matSill);
  upSill.position.set(0, wHU-H/2-1.05*S, wZU+0.05*S);
  upSill.rotation.x=-wallTilt;
  grp.add(upSill);
  const dGeoU = new THREE.BoxGeometry(0.15*S,1.85*S,1.4*S);
  for (let x=-40*S; x<=40*S; x+=8*S) {
    if (Math.abs(x)<4*S) continue;
    const d=new THREE.Mesh(dGeoU,matDiv);
    d.position.set(x,wHU-H/2,wZU);
    d.rotation.x=-wallTilt;
    grp.add(d);
  }

  const wHL = 2.2*S, wZL = BD/2 - wHL*(SL/H) - 0.55*S;
  const loWin = new THREE.Mesh(new THREE.BoxGeometry(L-12*S,1.2*S,1.3*S), matWindow);
  loWin.position.set(0,wHL-H/2,wZL);
  loWin.rotation.x=-wallTilt;
  grp.add(loWin);
  const loSill = new THREE.Mesh(new THREE.BoxGeometry(L-11.5*S, 0.3*S, 1.5*S), matSill);
  loSill.position.set(0, wHL-H/2-0.75*S, wZL+0.05*S);
  loSill.rotation.x=-wallTilt;
  grp.add(loSill);

  const cX=18*S, cW=20*S, cH=4.2*S, cD=8*S, cZ=BD/2+2.5*S;
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(cW,0.8*S,cD), matConcrete);
  canopy.position.set(cX, cH-H/2, cZ);
  canopy.castShadow=true;
  grp.add(canopy);
  const colG = new THREE.CylinderGeometry(0.3*S,0.3*S,cH-0.4*S,8);
  [-cW/2+1.5*S,-cW/6,cW/6,cW/2-1.5*S].forEach(ox=>{
    const col=new THREE.Mesh(colG,matCol);
    col.position.set(cX+ox,(cH-0.4*S)/2-H/2, cZ+cD/2-1.0*S);
    grp.add(col);
  });
  const door=new THREE.Mesh(new THREE.BoxGeometry(cW-4*S,3.2*S,0.2*S),matWindow);
  door.position.set(cX,1.6*S-H/2,cZ-1.0*S);
  grp.add(door);
  for(let i=0;i<3;i++){
    const st=new THREE.Mesh(new THREE.BoxGeometry(cW+2*S-i*0.8*S,0.25*S,cD+2*S-i*0.4*S),matStep);
    st.position.set(cX,0.25*S/2+i*0.25*S-H/2,cZ+0.5*S+i*0.2*S);
    grp.add(st);
  }

  const istSign = new THREE.Mesh(
    new THREE.PlaneGeometry(12*S, 3.8*S),
    new THREE.MeshBasicMaterial({ map: makeISTLogoTexture(), transparent: true, side: THREE.DoubleSide })
  );
  const sigY  = 3.8*S;
  const sigZ  = BD/2 - sigY*(SL/H) + 0.002*S;
  istSign.position.set(-26*S, sigY - H/2 + 1.9*S, sigZ);
  istSign.rotation.x = -wallTilt;
  grp.add(istSign);

  const rzC=document.createElement('canvas');
  rzC.width=1024;
  rzC.height=256;
  const rzX=rzC.getContext('2d');
  rzX.clearRect(0,0,1024,256);
  rzX.font='bold 112px Arial';
  rzX.textAlign='center';
  rzX.strokeStyle='rgba(0,0,0,0.7)';
  rzX.lineWidth=12;
  rzX.strokeText('RAZA BLOCK',512,160);
  rzX.fillStyle='#1e293b';
  rzX.fillText('RAZA BLOCK',512,160);
  const razaSign=new THREE.Mesh(
    new THREE.PlaneGeometry(12*S,3*S),
    new THREE.MeshBasicMaterial({map:crispTexture(rzC),transparent:true,side:THREE.DoubleSide})
  );
  razaSign.position.set(cX,6.2*S-H/2,cZ-1.0*S);
  grp.add(razaSign);

  const gnd=new THREE.Mesh(new THREE.PlaneGeometry(280*S,280*S),matGrass);
  gnd.rotation.x=-Math.PI/2;
  gnd.position.y=-H/2+0.0001;
  gnd.receiveShadow=true;
  grp.add(gnd);

  const road=new THREE.Mesh(new THREE.PlaneGeometry(280*S,16*S),matRoad);
  road.rotation.x=-Math.PI/2;
  road.position.set(0,-H/2+0.0002,22*S);
  grp.add(road);

  const curbGeo=new THREE.BoxGeometry(280*S,0.3*S,0.4*S);
  const curbMat=new THREE.MeshLambertMaterial({color:0xbfbfbf});
  const c1=new THREE.Mesh(curbGeo,curbMat);
  c1.position.set(0,-H/2+0.0003+0.15*S,14*S);
  grp.add(c1);
  const c2=new THREE.Mesh(curbGeo,curbMat);
  c2.position.set(0,-H/2+0.0003+0.15*S,30*S);
  grp.add(c2);

  const wCurve=new THREE.CatmullRomCurve3([
    new THREE.Vector3(-45*S,-H/2+0.0003,60*S),
    new THREE.Vector3(-35*S,-H/2+0.0003,40*S),
    new THREE.Vector3(-25*S,-H/2+0.0003,25*S),
    new THREE.Vector3(-10*S,-H/2+0.0003,14.2*S),
  ]);
  const wPts=wCurve.getPoints(50), wW=3.5*S;
  const wVerts=[], wIdx=[], wUVs=[];
  wPts.forEach((pt,i)=>{
    const tang = i<wPts.length-1 ? wPts[i+1].clone().sub(pt).normalize() : pt.clone().sub(wPts[i-1]).normalize();
    const norm = new THREE.Vector3(-tang.z,0,tang.x).normalize();
    const pL=pt.clone().add(norm.clone().multiplyScalar(wW/2));
    const pR=pt.clone().sub(norm.clone().multiplyScalar(wW/2));
    wVerts.push(pL.x,pL.y,pL.z, pR.x,pR.y,pR.z);
    wUVs.push(0,i/wPts.length, 1,i/wPts.length);
    if(i<wPts.length-1){ const c=i*2,n=(i+1)*2; wIdx.push(c,c+1,n, c+1,n+1,n); }
  });
  const wGeo=new THREE.BufferGeometry();
  wGeo.setAttribute('position',new THREE.Float32BufferAttribute(wVerts,3));
  wGeo.setAttribute('uv',new THREE.Float32BufferAttribute(wUVs,2));
  wGeo.setIndex(wIdx);
  wGeo.computeVertexNormals();
  const walkway=new THREE.Mesh(wGeo,matBrick);
  walkway.receiveShadow=true;
  grp.add(walkway);

  const tX=55*S, tZ=-30*S, tHH=26*S;
  const tBase=-H/2+0.0002;
  const tCore=new THREE.Mesh(new THREE.CylinderGeometry(1.6*S,1.8*S,tHH,10),matTower);
  tCore.position.set(tX,tBase+tHH/2,tZ);
  grp.add(tCore);
  for(let i=0;i<6;i++){
    const a=(i/6)*Math.PI*2;
    const pp=new THREE.Mesh(new THREE.CylinderGeometry(0.3*S,0.3*S,tHH,8),matTower);
    pp.position.set(tX+Math.cos(a)*4.2*S,tBase+tHH/2,tZ+Math.sin(a)*4.2*S);
    grp.add(pp);
  }
  [0.25,0.5,0.75].forEach(f=>{
    const rr=new THREE.Mesh(new THREE.TorusGeometry(4.2*S,0.22*S,6,20),matTower);
    rr.position.set(tX,tBase+tHH*f,tZ);
    rr.rotation.x=Math.PI/2;
    grp.add(rr);
  });
  const tankCyl=new THREE.Mesh(new THREE.CylinderGeometry(5.2*S,5.2*S,3*S,14),matTower);
  tankCyl.position.set(tX,tBase+tHH+1.5*S,tZ);
  grp.add(tankCyl);
  const dome=new THREE.Mesh(new THREE.SphereGeometry(5.2*S,14,10,0,Math.PI*2,0,Math.PI/2),matTower);
  dome.scale.y=0.4;
  dome.position.set(tX,tBase+tHH+3*S,tZ);
  grp.add(dome);

  const addTree=(tx,tz,sc=1)=>{
    const tr=new THREE.Group();
    tr.position.set(tx,tBase,tz);
    tr.scale.setScalar(sc);
    const trunk=new THREE.Mesh(new THREE.CylinderGeometry(0.3*S,0.45*S,4.5*S,8),matTrunk);
    trunk.position.y=2.25*S;
    tr.add(trunk);
    [{r:2.4,x:0,y:4.8,z:0},{r:1.8,x:-1.2*S,y:4.2*S,z:0.8*S},{r:1.9,x:1.0*S,y:4.5*S,z:-1*S},{r:1.6,x:0.5*S,y:5.6*S,z:1.1*S}].forEach(si=>{
      const sf=new THREE.Mesh(new THREE.SphereGeometry(si.r*S,8,8),matLeaf);
      sf.position.set(si.x,si.y*S||si.y,si.z);
      tr.add(sf);
    });
    grp.add(tr);
  };
  addTree(-55*S,10*S,1.3);
  addTree(-52*S,-5*S,1.2);
  addTree(-60*S,22*S,1.0);
  addTree(-48*S,5*S,0.9);
  addTree(36*S,-5*S,1.0);
  addTree(48*S,10*S,1.1);

  const hedgeMat=new THREE.MeshLambertMaterial({color:0x3d702d});
  const hedge=new THREE.Mesh(new THREE.BoxGeometry(100*S,0.6*S,0.8*S),hedgeMat);
  hedge.position.set(-15*S,-H/2+0.3*S,13*S);
  grp.add(hedge);

  const addLamp=(lx,lz)=>{
    const lp=new THREE.Group();
    lp.position.set(lx,tBase,lz);
    const pole=new THREE.Mesh(new THREE.CylinderGeometry(0.08*S,0.12*S,6*S,8),matLamp);
    pole.position.y=3*S;
    lp.add(pole);
    const bulb=new THREE.Mesh(new THREE.SphereGeometry(0.15*S,8,8),new THREE.MeshBasicMaterial({color:0xffffff}));
    bulb.position.set(1.2*S,6.2*S,0);
    lp.add(bulb);
    grp.add(lp);
  };
  addLamp(-35*S,13.5*S);
  addLamp(-10*S,13.5*S);
  addLamp(10*S,13.5*S);
  addLamp(30*S,13.5*S);

  return grp;
}

// ══════════════════════════════════════════════════════════════════════════════
// FIXED: All materials now use MeshLambertMaterial (no environment map)
// ══════════════════════════════════════════════════════════════════════════════

const MAT = {
  wall: () => {
    return new THREE.MeshLambertMaterial({
      color: 0xd4d0c8,
      map: concreteTex,
    });
  },
  wallDark: () => {
    return new THREE.MeshLambertMaterial({
      color: 0xa8a4a0,
      map: concreteTex,
    });
  },
  white: () => {
    return new THREE.MeshLambertMaterial({
      color: 0xf0eeea,
      map: concreteTex,
    });
  },
  concrete: () => {
    return new THREE.MeshLambertMaterial({
      color: 0xc8c4bc,
      map: concreteTex,
    });
  },
  glass: () => {
    return new THREE.MeshLambertMaterial({
      color: 0x5a8aaa,
      transparent: true,
      opacity: 0.7,
      map: glassTex,
    });
  },
  trim: () => {
    return new THREE.MeshLambertMaterial({
      color: 0xe8e4dc,
      map: concreteTex,
    });
  },
  slate: () => {
    return new THREE.MeshLambertMaterial({
      color: 0x6e6a65,
      map: concreteTex,
    });
  },
  darkSlate: () => {
    return new THREE.MeshLambertMaterial({
      color: 0x4a4844,
      map: concreteTex,
    });
  },
  gold: () => {
    return new THREE.MeshLambertMaterial({
      color: 0xd4a843,
    });
  },
  lightGray: () => {
    return new THREE.MeshLambertMaterial({
      color: 0xe0ddd8,
      map: concreteTex,
    });
  },
};

const CATEGORY_COLORS = {
  academic: 0x6366f1,
  admin: 0xec4899,
  main: 0xf5b942,
  research: 0x4ECDC4,
  library: 0x7c3aed,
  mosque: 0x34d399,
  gym: 0xfb923c,
  hostel: 0xa78bfa,
  suparco: 0x8b5cf6,
  block: 0x6b7280,
};

const CATEGORY_NAMES = {
  academic: 'Academic',
  admin: 'Administration',
  main: 'Main Building',
  research: 'Research',
  library: 'Library',
  mosque: 'Mosque',
  gym: 'Sports',
  hostel: 'Residential',
  suparco: 'Space Agency',
  block: 'Academic Block',
};

function getCategoryColor(type) {
  return CATEGORY_COLORS[type] || 0x6b7280;
}

function getCategoryName(type) {
  return CATEGORY_NAMES[type] || 'Building';
}

let globalEnvMap = null;

function addMicroDetails(grp, building) {
  grp.traverse(child => {
    if (child.isMesh && child.material && child.material.color) {
      // No environment map - colors stay vibrant!
    }
  });
}

function addLabel(grp, name, height, scaleX=0.04, scaleY=0.012) {
  const lbl = new THREE.Mesh(
    new THREE.PlaneGeometry(scaleX, scaleY),
    new THREE.MeshBasicMaterial({ map: makeNameLabel(name), transparent: true, depthTest: false, side: THREE.DoubleSide, fog: false })
  );
  lbl.position.set(0, height + 0.006, 0);
  lbl.renderOrder = 999;
  lbl.userData = { isLabel: true };
  grp.add(lbl);
}

// ── Building Builders (UPDATED with MeshLambertMaterial) ───────────────────

function buildMosque(w, d, h, name, color) {
  const grp = new THREE.Group();
  const wall = new THREE.MeshLambertMaterial({
    color: color || 0x34d399,
    map: concreteTex,
  });
  const trim = MAT.trim(), domeMat = MAT.wall(), gold = MAT.gold();

  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wall);
  body.position.y = h / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  grp.add(body);

  const parapet = new THREE.Mesh(new THREE.BoxGeometry(w + 0.002, 0.004, d + 0.002), trim);
  parapet.position.y = h + 0.002;
  grp.add(parapet);

  const domeSphere = new THREE.Mesh(new THREE.SphereGeometry(w * 0.25, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
  domeSphere.position.y = h + w * 0.02;
  domeSphere.castShadow = true;
  grp.add(domeSphere);

  const drum = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.25, w * 0.27, h * 0.25, 12), trim);
  drum.position.y = h + h * 0.12;
  grp.add(drum);

  const finial = new THREE.Mesh(new THREE.CylinderGeometry(0.0005, 0.001, 0.006, 8), gold);
  finial.position.y = h + w * 0.25 + h * 0.12 + 0.003;
  grp.add(finial);
  const crescent = new THREE.Mesh(new THREE.TorusGeometry(0.0015, 0.0003, 4, 8, Math.PI * 1.5), gold);
  crescent.position.y = finial.position.y + 0.004;
  crescent.rotation.z = Math.PI / 4;
  grp.add(crescent);

  [-w * 0.48, w * 0.48].forEach(ox => {
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.005, h * 1.6, 10), wall);
    base.position.set(ox, h * 0.8, 0);
    base.castShadow = true;
    grp.add(base);
    const balcony = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.004, 0.003, 10), trim);
    balcony.position.set(ox, h * 1.35, 0);
    grp.add(balcony);
    const mDome = new THREE.Mesh(new THREE.SphereGeometry(0.004, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
    mDome.position.set(ox, h * 1.48, 0);
    grp.add(mDome);
    const mFin = new THREE.Mesh(new THREE.CylinderGeometry(0.0003, 0.0006, 0.004, 6), gold);
    mFin.position.set(ox, h * 1.48 + 0.004 + 0.002, 0);
    grp.add(mFin);
  });

  for (let i = -1; i <= 1; i++) {
    const arch = new THREE.Mesh(new THREE.BoxGeometry(w * 0.15, h * 0.5, 0.001), MAT.glass());
    arch.position.set(i * w * 0.22, h * 0.3, d / 2 + 0.0005);
    grp.add(arch);
  }

  addLabel(grp, name, h * 1.7, w * 1.2, 0.008);
  return grp;
}

function buildAcademic(w, d, h, name, color) {
  const grp = new THREE.Group();
  const wall = new THREE.MeshLambertMaterial({
    color: color || 0x6366f1,
    map: concreteTex,
  });
  const trim = MAT.white(), glass = MAT.glass(), col = MAT.trim();

  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wall);
  body.position.y = h / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  grp.add(body);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 0.006, 0.003, d + 0.006), trim);
  roof.position.y = h + 0.0015;
  grp.add(roof);

  [0.3, 0.6, 0.85].forEach(frac => {
    const band = new THREE.Mesh(new THREE.BoxGeometry(w + 0.001, h * 0.04, d + 0.001), trim);
    band.position.y = frac * h;
    grp.add(band);
  });

  const numCols = Math.round(w / 0.01);
  for (let i = 0; i < numCols; i++) {
    const cx = -w / 2 + (i + 0.5) * (w / numCols);
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.0015, 0.0018, h, 8), col);
    c.position.set(cx, h / 2, d / 2 + 0.001);
    grp.add(c);
  }

  const winStrip = new THREE.Mesh(new THREE.BoxGeometry(w * 0.85, h * 0.28, 0.001), glass);
  winStrip.position.set(0, h * 0.55, d / 2 + 0.0005);
  grp.add(winStrip);

  addLabel(grp, name, h + 0.012, w * 1.4, 0.008);
  return grp;
}

function buildLibrary(w, d, h, name, color) {
  const grp = new THREE.Group();
  const wall = new THREE.MeshLambertMaterial({
    color: color || 0x7c3aed,
    map: brickTex,
  });
  const col = MAT.white(), trim = MAT.trim();

  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wall);
  body.position.y = h / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  grp.add(body);

  const portico = new THREE.Mesh(new THREE.BoxGeometry(w * 0.5, h * 0.85, d * 0.25), MAT.wall());
  portico.position.set(0, h * 0.85 / 2, d / 2 + d * 0.125);
  grp.add(portico);

  const pCols = 4;
  for (let i = 0; i < pCols; i++) {
    const cx = -w * 0.2 + i * (w * 0.4 / (pCols - 1));
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.0016, 0.002, h * 0.85, 10), col);
    c.position.set(cx, h * 0.85 / 2, d / 2 + d * 0.24);
    grp.add(c);
  }

  const pedShape = new THREE.Shape();
  pedShape.moveTo(-w * 0.26, 0);
  pedShape.lineTo(w * 0.26, 0);
  pedShape.lineTo(0, h * 0.18);
  pedShape.closePath();
  const pedGeo = new THREE.ExtrudeGeometry(pedShape, { depth: d * 0.22, bevelEnabled: false });
  const ped = new THREE.Mesh(pedGeo, trim);
  ped.position.set(0, h * 0.85, d / 2 + d * 0.125);
  grp.add(ped);

  for (let s = 0; s < 3; s++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(w * 0.54 + s * 0.004, 0.002, 0.004), MAT.concrete());
    step.position.set(0, s * 0.002, d / 2 + d * 0.26 + s * 0.002);
    grp.add(step);
  }

  const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 0.004, 0.003, d + 0.004), trim);
  roof.position.y = h + 0.0015;
  grp.add(roof);

  addLabel(grp, name, h + 0.012, w * 1.4, 0.008);
  return grp;
}

function buildObservatory(w, d, h, name, color) {
  const grp = new THREE.Group();
  const wall = new THREE.MeshLambertMaterial({
    color: color || 0x4ECDC4,
    map: concreteTex,
  });
  const dome = MAT.darkSlate(), trim = MAT.white();

  const baseGeo = new THREE.CylinderGeometry(w * 0.5, w * 0.52, h * 0.55, 8);
  const base = new THREE.Mesh(baseGeo, wall);
  base.position.y = h * 0.55 / 2;
  base.castShadow = true;
  grp.add(base);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(w * 0.52, 0.002, 6, 16), trim);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = h * 0.55;
  grp.add(ring);

  const drum = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.45, w * 0.5, h * 0.25, 16), MAT.concrete());
  drum.position.y = h * 0.55 + h * 0.125;
  grp.add(drum);

  const domeMesh = new THREE.Mesh(new THREE.SphereGeometry(w * 0.48, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), dome);
  domeMesh.position.y = h * 0.55 + h * 0.25 + 0.001;
  domeMesh.castShadow = true;
  grp.add(domeMesh);

  const slit = new THREE.Mesh(new THREE.BoxGeometry(0.002, w * 0.4, 0.001), MAT.wallDark());
  slit.position.set(0, h * 0.55 + h * 0.25 + w * 0.2, w * 0.46);
  grp.add(slit);

  const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.003, w * 0.3, 8), MAT.slate());
  scope.position.set(0, h * 0.55 + h * 0.25 + w * 0.3, 0);
  scope.rotation.z = Math.PI / 4;
  grp.add(scope);

  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.005, h * 0.18, 0.001), MAT.glass());
    win.position.set(Math.cos(a) * w * 0.51, h * 0.3, Math.sin(a) * w * 0.51);
    win.rotation.y = a;
    grp.add(win);
  }

  addLabel(grp, name, h * 0.55 + h * 0.25 + w * 0.5, w * 1.4, 0.008);
  return grp;
}

function buildGym(w, d, h, name, color) {
  const grp = new THREE.Group();
  const wall = new THREE.MeshLambertMaterial({
    color: color || 0xfb923c,
    map: concreteTex,
  });
  const roof = MAT.wallDark(), trim = MAT.white();

  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wall);
  body.position.y = h / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  grp.add(body);

  const vault = new THREE.Mesh(
    new THREE.CylinderGeometry(d / 2, d / 2, w, 16, 1, false, 0, Math.PI),
    roof
  );
  vault.rotation.z = Math.PI / 2;
  vault.position.y = h + d / 2;
  vault.castShadow = true;
  grp.add(vault);

  for (let i = 0; i < 3; i++) {
    const win = new THREE.Mesh(new THREE.BoxGeometry(w * 0.06, h * 0.2, 0.001), MAT.glass());
    win.position.set(-w * 0.25 + i * w * 0.25, h * 0.65, d / 2 + 0.0005);
    grp.add(win);
  }

  const canopy = new THREE.Mesh(new THREE.BoxGeometry(w * 0.3, 0.003, d * 0.15), trim);
  canopy.position.set(0, h * 0.7, d / 2 + d * 0.075);
  grp.add(canopy);

  addLabel(grp, name, h + d / 2 + 0.01, w * 1.4, 0.008);
  return grp;
}

function buildHostel(w, d, h, name, color) {
  const grp = new THREE.Group();
  const wall = new THREE.MeshLambertMaterial({
    color: color || 0xa78bfa,
    map: concreteTex,
  });
  const balc = MAT.trim(), glass = MAT.glass(), trim = MAT.white();

  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wall);
  body.position.y = h / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  grp.add(body);

  const floors = 5;
  for (let f = 1; f < floors; f++) {
    const band = new THREE.Mesh(new THREE.BoxGeometry(w + 0.001, 0.0015, d + 0.001), trim);
    band.position.y = (f / floors) * h;
    grp.add(band);
  }

  for (let f = 0; f < floors; f++) {
    const by = ((f + 0.5) / floors) * h;
    const slab = new THREE.Mesh(new THREE.BoxGeometry(w + 0.005, 0.0015, 0.008), balc);
    slab.position.set(0, by - 0.002, d / 2 + 0.004);
    grp.add(slab);
    const rail = new THREE.Mesh(new THREE.BoxGeometry(w, 0.005, 0.001), glass);
    rail.position.set(0, by + 0.002, d / 2 + 0.008);
    grp.add(rail);
    for (let i = -1; i <= 1; i++) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(w * 0.18, h * 0.12, 0.001), glass);
      win.position.set(i * w * 0.26, by + h * 0.05, d / 2 + 0.0005);
      grp.add(win);
    }
  }

  const parapet = new THREE.Mesh(new THREE.BoxGeometry(w + 0.002, 0.004, d + 0.002), trim);
  parapet.position.y = h + 0.002;
  grp.add(parapet);

  [[w/2, d/2],[-w/2, d/2],[w/2,-d/2],[-w/2,-d/2]].forEach(([cx, cz]) => {
    const tower = new THREE.Mesh(new THREE.BoxGeometry(0.006, h * 1.08, 0.006), MAT.lightGray());
    tower.position.set(cx, h * 1.08 / 2, cz);
    grp.add(tower);
  });

  addLabel(grp, name, h * 1.08 + 0.01, w * 1.4, 0.008);
  return grp;
}

function buildSUPARCO(w, d, h, name, color) {
  const grp = new THREE.Group();
  const wall = new THREE.MeshLambertMaterial({
    color: color || 0x8b5cf6,
    map: concreteTex,
  });
  const col = MAT.white(), trim = MAT.trim();

  const center = new THREE.Mesh(new THREE.BoxGeometry(w * 0.5, h, d), wall);
  center.position.y = h / 2;
  center.castShadow = true;
  grp.add(center);

  [-w * 0.35, w * 0.35].forEach(ox => {
    const wing = new THREE.Mesh(new THREE.BoxGeometry(w * 0.28, h * 0.75, d * 0.85), MAT.wall());
    wing.position.set(ox, h * 0.75 / 2, 0);
    wing.castShadow = true;
    grp.add(wing);
    const wRoof = new THREE.Mesh(new THREE.BoxGeometry(w * 0.28 + 0.003, 0.003, d * 0.85 + 0.003), trim);
    wRoof.position.set(ox, h * 0.75 + 0.0015, 0);
    grp.add(wRoof);
  });

  const nCols = 6;
  for (let i = 0; i < nCols; i++) {
    const cx = -w * 0.24 + i * (w * 0.48 / (nCols - 1));
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.0025, h * 0.9, 10), col);
    c.position.set(cx, h * 0.9 / 2, d / 2 + 0.003);
    grp.add(c);
  }

  const entab = new THREE.Mesh(new THREE.BoxGeometry(w * 0.52, h * 0.08, d * 0.12), trim);
  entab.position.set(0, h * 0.93, d / 2 + 0.002);
  grp.add(entab);

  const cDome = new THREE.Mesh(new THREE.SphereGeometry(w * 0.12, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), MAT.wallDark());
  cDome.position.y = h + w * 0.03;
  cDome.castShadow = true;
  grp.add(cDome);
  const cDrum = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.12, w * 0.13, h * 0.15, 12), trim);
  cDrum.position.y = h + h * 0.075;
  grp.add(cDrum);

  for (let f = 0; f < 3; f++) {
    for (let i = -1; i <= 1; i++) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(w * 0.08, h * 0.18, 0.001), MAT.glass());
      win.position.set(i * w * 0.12, (f + 0.5) * h / 3.2, d / 2 + 0.0005);
      grp.add(win);
    }
  }

  const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 0.005, 0.003, d + 0.005), trim);
  roof.position.y = h + 0.0015;
  grp.add(roof);

  addLabel(grp, name, h + w * 0.14 + 0.01, w * 1.2, 0.008);
  return grp;
}

function buildAdmin(w, d, h, name, color) {
  const grp = new THREE.Group();
  const wall = new THREE.MeshLambertMaterial({
    color: color || 0xec4899,
    map: concreteTex,
  });
  const trim = MAT.white(), glass = MAT.glass();

  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wall);
  body.position.y = h / 2;
  body.castShadow = true;
  grp.add(body);

  const tower = new THREE.Mesh(new THREE.BoxGeometry(w * 0.3, h * 1.35, d * 0.6), MAT.lightGray());
  tower.position.set(0, h * 1.35 / 2, 0);
  tower.castShadow = true;
  grp.add(tower);

  const pyrShape = new THREE.Shape();
  pyrShape.moveTo(-w * 0.16, 0);
  pyrShape.lineTo(w * 0.16, 0);
  pyrShape.lineTo(0, h * 0.25);
  pyrShape.closePath();
  const pyrGeo = new THREE.ExtrudeGeometry(pyrShape, { depth: d * 0.55, bevelEnabled: false });
  const pyr = new THREE.Mesh(pyrGeo, MAT.darkSlate());
  pyr.rotation.x = Math.PI / 2;
  pyr.position.set(-w * 0, h * 1.35, -d * 0.275);
  grp.add(pyr);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 0.003, 0.003, d + 0.003), trim);
  roof.position.y = h + 0.0015;
  grp.add(roof);

  for (let f = 0; f < 3; f++) {
    for (let i = -1; i <= 1; i++) {
      if (i === 0) continue;
      const win = new THREE.Mesh(new THREE.BoxGeometry(w * 0.14, h * 0.16, 0.001), glass);
      win.position.set(i * w * 0.28, (f + 0.55) * h / 3.2, d / 2 + 0.0005);
      grp.add(win);
    }
    const tWin = new THREE.Mesh(new THREE.BoxGeometry(w * 0.1, h * 0.16, 0.001), glass);
    tWin.position.set(0, (f + 0.55) * h * 1.35 / 3.8, d * 0.3 + 0.0005);
    grp.add(tWin);
  }

  [-w * 0.12, w * 0.12].forEach(cx => {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.0012, 0.0015, h * 0.65, 8), trim);
    c.position.set(cx, h * 0.65 / 2, d / 2 + 0.004);
    grp.add(c);
  });

  addLabel(grp, name, h * 1.35 + h * 0.25 + 0.01, w * 1.4, 0.008);
  return grp;
}

function buildResearch(w, d, h, name, color) {
  const grp = new THREE.Group();
  const wall = new THREE.MeshLambertMaterial({
    color: color || 0x4ECDC4,
    map: concreteTex,
  });
  const glass = MAT.glass(), trim = MAT.white();

  [1.0, 0.85, 0.68].forEach((frac, i) => {
    const step = new THREE.Mesh(new THREE.BoxGeometry(w * frac, h * (i === 0 ? 0.35 : 0.25), d * frac), wall);
    step.position.y = h * 0.35 * i + (h * (i === 0 ? 0.35 : 0.25)) / 2;
    step.castShadow = true;
    grp.add(step);
  });

  const topY = h * 0.35 + h * 0.25 + h * 0.25;

  const curtain = new THREE.Mesh(new THREE.BoxGeometry(w * 0.65, topY * 0.9, 0.001), glass);
  curtain.position.set(0, topY * 0.45, d * 0.68 / 2 + 0.0005);
  grp.add(curtain);

  for (let row = 0; row < 4; row++) {
    const hLine = new THREE.Mesh(new THREE.BoxGeometry(w * 0.65, 0.001, 0.001), trim);
    hLine.position.set(0, row * topY / 4 + 0.02, d * 0.68 / 2 + 0.001);
    grp.add(hLine);
  }
  for (let col = -1; col <= 1; col++) {
    const vLine = new THREE.Mesh(new THREE.BoxGeometry(0.001, topY * 0.9, 0.001), trim);
    vLine.position.set(col * w * 0.2, topY * 0.45, d * 0.68 / 2 + 0.001);
    grp.add(vLine);
  }

  const cant = new THREE.Mesh(new THREE.BoxGeometry(w * 0.25, h * 0.08, d * 0.3), MAT.wallDark());
  cant.position.set(w * 0.4, topY, d * 0.18);
  grp.add(cant);

  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.0005, 0.0008, h * 0.4, 6), MAT.slate());
  mast.position.set(w * 0.3, topY + h * 0.2, 0);
  grp.add(mast);

  addLabel(grp, name, topY + h * 0.4 + 0.01, w * 1.6, 0.008);
  return grp;
}

function buildBlock(w, d, h, name, color) {
  const grp = new THREE.Group();
  const wall = new THREE.MeshLambertMaterial({
    color: color || 0x6b7280,
    map: brickTex,
  });
  const fin = MAT.concrete(), trim = MAT.white(), glass = MAT.glass();

  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wall);
  body.position.y = h / 2;
  body.castShadow = true;
  grp.add(body);

  const nFins = Math.round(w / 0.007);
  for (let i = 0; i < nFins; i++) {
    const fx = -w / 2 + (i + 0.5) * (w / nFins);
    const f = new THREE.Mesh(new THREE.BoxGeometry(0.0015, h + 0.003, 0.003), fin);
    f.position.set(fx, h / 2, d / 2 + 0.0015);
    grp.add(f);
  }

  const win = new THREE.Mesh(new THREE.BoxGeometry(w * 0.85, h * 0.35, 0.001), glass);
  win.position.set(0, h * 0.55, d / 2 + 0.0005);
  grp.add(win);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 0.002, 0.003, d + 0.002), trim);
  roof.position.y = h + 0.0015;
  grp.add(roof);

  const canopy = new THREE.Mesh(new THREE.BoxGeometry(w * 0.4, 0.002, d * 0.15), trim);
  canopy.position.set(0, h * 0.65, d / 2 + d * 0.075);
  grp.add(canopy);

  addLabel(grp, name, h + 0.012, w * 1.6, 0.008);
  return grp;
}

// ══════════════════════════════════════════════════════════════════════════════
// Campus building definitions
// ══════════════════════════════════════════════════════════════════════════════
const CAMPUS_BUILDINGS = [
  { x:-0.05, z:-0.06, w:0.04,  d:0.03,  heightM:15, type:'academic', name:'Dept. of Electrical Engineering', dept:'Electrical Engineering', areaM2:6800, hours:'8:00 AM – 5:00 PM', builtYear:2005, category:'Academic' },
  { x:0.01,  z:-0.07, w:0.045, d:0.03,  heightM:14, type:'academic', name:'Dept. of Avionics Engineering',   dept:'Avionics Engineering',   areaM2:7200, hours:'8:00 AM – 5:00 PM', builtYear:2007, category:'Academic' },
  { x:-0.09, z:-0.01, w:0.03,  d:0.04,  heightM:12, type:'library',  name:'IST Library',                     dept:'Central Library',        areaM2:5400, hours:'8:00 AM – 10:00 PM', builtYear:2004, category:'Library' },
  { x:-0.08, z:0.07,  w:0.025, d:0.025, heightM:17, type:'mosque',   name:'IST Mosque',                      dept:'Prayer Hall',            areaM2:1800, hours:'Open 24 hours', builtYear:2008, category:'Mosque' },
  { x:-0.07, z:0.04,  w:0.025, d:0.02,  heightM:9,  type:'gym',      name:'IST Gym',                         dept:'Sports & Recreation',    areaM2:2100, hours:'6:00 AM – 10:00 PM', builtYear:2010, category:'Sports' },
  { x:-0.04, z:-0.04, w:0.02,  d:0.02,  heightM:13, type:'obs',      name:'IST Observatory',                 dept:'Astronomy & Astrophysics', areaM2:900, hours:'7:00 PM – 2:00 AM', builtYear:2012, category:'Research' },
  { x:-0.11, z:-0.03, w:0.03,  d:0.05,  heightM:20, type:'hostel',   name:'Faculty Hostel',                  dept:'Residential',            areaM2:8400, hours:'Residents only', builtYear:2006, category:'Residential' },
  { x:0.02,  z:0.13,  w:0.07,  d:0.05,  heightM:19, type:'suparco',  name:'SUPARCO HQ',                      dept:'Space Agency HQ',        areaM2:15600, hours:'9:00 AM – 4:00 PM', builtYear:2002, category:'Space Agency' },
  { x:0.05,  z:0.03,  w:0.035, d:0.03,  heightM:13, type:'admin',    name:'Admin Block',                     dept:'Administration',         areaM2:4600, hours:'8:30 AM – 4:30 PM', builtYear:2003, category:'Administration' },
  { x:0.06,  z:-0.04, w:0.03,  d:0.03,  heightM:16, type:'research', name:'Research Center',                 dept:'R&D Labs',               areaM2:5800, hours:'8:00 AM – 8:00 PM', builtYear:2015, category:'Research' },
  { x:-0.02, z:0.06,  w:0.025, d:0.015, heightM:9,  type:'block',    name:'Block C',                         dept:'Classrooms',             areaM2:2400, hours:'8:00 AM – 6:00 PM', builtYear:2009, category:'Academic' },
  { x:0.08,  z:0.06,  w:0.02,  d:0.02,  heightM:8,  type:'block',    name:'Block D',                         dept:'Classrooms',             areaM2:1900, hours:'8:00 AM – 6:00 PM', builtYear:2011, category:'Academic' },
];

function buildCampusBuilding(b) {
  const h = b.heightM * M;
  const lbl = `${b.name} · ${b.heightM} m`;
  const color = getCategoryColor(b.type);
  let bldg;
  switch (b.type) {
    case 'mosque':   bldg = buildMosque(b.w, b.d, h, lbl, color); break;
    case 'academic': bldg = buildAcademic(b.w, b.d, h, lbl, color); break;
    case 'library':  bldg = buildLibrary(b.w, b.d, h, lbl, color); break;
    case 'obs':      bldg = buildObservatory(b.w, b.d, h, lbl, color); break;
    case 'gym':      bldg = buildGym(b.w, b.d, h, lbl, color); break;
    case 'hostel':   bldg = buildHostel(b.w, b.d, h, lbl, color); break;
    case 'suparco':  bldg = buildSUPARCO(b.w, b.d, h, lbl, color); break;
    case 'admin':    bldg = buildAdmin(b.w, b.d, h, lbl, color); break;
    case 'research': bldg = buildResearch(b.w, b.d, h, lbl, color); break;
    default:         bldg = buildBlock(b.w, b.d, h, lbl, color);
  }
  addMicroDetails(bldg, b);
  return bldg;
}

// ══════════════════════════════════════════════════════════════════════════════
// Panorama Viewer Component (Custom - NO Google API)
// ══════════════════════════════════════════════════════════════════════════════
const PanoramaViewer = ({ images, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const viewerRef = useRef(null);

  const current = images[currentIndex];

  // Load panorama using Three.js
  useEffect(() => {
    if (!containerRef.current || !current) return;

    const container = containerRef.current;
    const W = container.clientWidth || window.innerWidth;
    const H = container.clientHeight || window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111122);

    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000);
    camera.position.set(0, 0, 0.1);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.NoToneMapping;
    container.appendChild(renderer.domElement);

    viewerRef.current = renderer;

    // Create sphere
    const geometry = new THREE.SphereGeometry(50, 64, 64);
    geometry.scale(-1, 1, 1); // Flip inside out

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(current.image, () => {
      setIsLoading(false);
    });

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotation = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      rotation.y += deltaX * 0.005;
      rotation.x += deltaY * 0.005;
      rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotation.x));

      sphere.rotation.x = rotation.x;
      sphere.rotation.y = rotation.y;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => { isDragging = false; };

    // Touch support
    const onTouchStart = (e) => {
      const touch = e.touches[0];
      isDragging = true;
      previousMousePosition = { x: touch.clientX, y: touch.clientY };
    };

    const onTouchMove = (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - previousMousePosition.x;
      const deltaY = touch.clientY - previousMousePosition.y;

      rotation.y += deltaX * 0.005;
      rotation.x += deltaY * 0.005;
      rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotation.x));

      sphere.rotation.x = rotation.x;
      sphere.rotation.y = rotation.y;

      previousMousePosition = { x: touch.clientX, y: touch.clientY };
    };

    const onTouchEnd = () => { isDragging = false; };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    // Animation loop
    let autoRotate = true;
    let autoRotateTimeout = null;

    const animate = () => {
      requestAnimationFrame(animate);

      if (autoRotate && !isDragging) {
        sphere.rotation.y += 0.002;
        rotation.y = sphere.rotation.y;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Stop auto-rotate on user interaction
    const stopAutoRotate = () => {
      autoRotate = false;
      clearTimeout(autoRotateTimeout);
      autoRotateTimeout = setTimeout(() => { autoRotate = true; }, 5000);
    };

    renderer.domElement.addEventListener('mousedown', stopAutoRotate);
    renderer.domElement.addEventListener('touchstart', stopAutoRotate);

    // Resize handler
    const onResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mousedown', stopAutoRotate);
      renderer.domElement.removeEventListener('touchstart', onTouchStart);
      renderer.domElement.removeEventListener('touchstart', stopAutoRotate);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [current]);

  const goToPrev = () => {
    if (currentIndex > 0) {
      setIsLoading(true);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setIsLoading(true);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const progress = ((currentIndex + 1) / images.length) * 100;

  return (
    <div className={styles.panoramaOverlay}>
      <div className={styles.panoramaHeader}>
        <div className={styles.panoramaTitle}>
          <span>🌍 {current.name}</span>
          <span className={styles.panoramaSubtitle}>{current.description}</span>
        </div>
        <button className={styles.exitPanoramaBtn} onClick={onClose}>✕</button>
      </div>

      <div ref={containerRef} className={styles.panoramaContainer}>
        {isLoading && (
          <div className={styles.panoramaLoading}>
            <div className={styles.panoramaSpinner}></div>
            <span>Loading panorama...</span>
          </div>
        )}
      </div>

      <div className={styles.panoramaControls}>
        <div className={styles.panoramaNav}>
          <button
            className={styles.panoramaNavBtn}
            onClick={goToPrev}
            disabled={currentIndex === 0}
          >
            ◀
          </button>
          <span className={styles.panoramaCounter}>
            {currentIndex + 1} / {images.length}
          </span>
          <button
            className={styles.panoramaNavBtn}
            onClick={goToNext}
            disabled={currentIndex === images.length - 1}
          >
            ▶
          </button>
        </div>

        <div className={styles.panoramaProgress}>
          <div className={styles.panoramaProgressBar} style={{ width: `${progress}%` }} />
        </div>

        <div className={styles.panoramaHint}>
          🖱️ Drag to look around · Scroll to zoom
        </div>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════════════════════════════════════════════

const CampusMap3D = () => {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const ctrlRef = useRef(null);

  const [phase, setPhase] = useState('zoom');
  const [weather, setWeather] = useState(null);
  const [liveTime, setLiveTime] = useState(new Date());
  const [loadPct, setLoadPct] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [pinnedIdx, setPinnedIdx] = useState(null);
  const [layer, setLayer] = useState('satellite');
  const [query, setQuery] = useState('');
  const [sunHour, setSunHour] = useState(12);
  const [showStats, setShowStats] = useState(false);
  const [stats, setStats] = useState({ fps:0, tiles:0, altM:0 });
  const [routeMode, setRouteMode] = useState(false);
  const [route, setRoute] = useState(null);
  const [compareOn, setCompareOn] = useState(false);
  const [compareVal, setCompareVal] = useState(100);
  const [clarityMode, setClarityMode] = useState(true);
  
  // ── Panorama Viewer State ──────────────────────────────────────────────
  const [showPanorama, setShowPanorama] = useState(false);
  const [panoramaStartIndex, setPanoramaStartIndex] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setLiveTime(new Date()), 1000);
    return () => clearInterval(iv);
  }, []);
  
  useEffect(() => {
    fetchWeather(IST_LAT, IST_LON).then(setWeather);
  }, []);

  const osmData = parseOSMData(OSM_DATA);
  console.log('🏛️ OSM Buildings loaded:', osmData.buildings.length);

  // ── Toggle Panorama Viewer ──────────────────────────────────────────────
  const togglePanorama = () => {
    if (showPanorama) {
      setShowPanorama(false);
      document.body.style.overflow = 'unset';
    } else {
      setShowPanorama(true);
      setPanoramaStartIndex(0);
      document.body.style.overflow = 'hidden';
    }
  };

  // ── THREE.js Setup ──────────────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const W = el.clientWidth || 800;
    const H = el.clientHeight || 560;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000008, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.toneMappingExposure = 1.0;
    
    if ('outputColorSpace' in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace;
    else renderer.outputEncoding = THREE.sRGBEncoding;
    const maxAniso = renderer.capabilities.getMaxAnisotropy();
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB);

    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 16;
    skyCanvas.height = 512;
    const skyCtx = skyCanvas.getContext('2d');
    const skyGrad = skyCtx.createLinearGradient(0, 0, 0, 512);
    skyGrad.addColorStop(0, '#5f9bd6');
    skyGrad.addColorStop(0.5, '#a9c9e8');
    skyGrad.addColorStop(0.78, '#e2ebf2');
    skyGrad.addColorStop(1, '#eef2f5');
    skyCtx.fillStyle = skyGrad;
    skyCtx.fillRect(0, 0, 16, 512);
    const skyTex = new THREE.CanvasTexture(skyCanvas);
    if ('colorSpace' in skyTex) skyTex.colorSpace = THREE.SRGBColorSpace;
    const skyDome = new THREE.Mesh(
      new THREE.SphereGeometry(180, 24, 16),
      new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide, fog: false, depthWrite: false })
    );
    skyDome.visible = false;
    scene.add(skyDome);

    const groundFog = new THREE.Fog(0x888888, 4, 40);
    groundFog.far = 40;
    groundFog.near = 1;

    const sv = [];
    for (let i = 0; i < 4000; i++) sv.push((Math.random() - 0.5) * 300, (Math.random() - 0.5) * 300, (Math.random() - 0.5) * 300);
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute('position', new THREE.Float32BufferAttribute(sv, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.12, transparent: true, opacity: 1 });
    scene.add(new THREE.Points(sGeo, starMat));

    const earth = new THREE.Mesh(new THREE.SphereGeometry(12, 48, 48), new THREE.MeshBasicMaterial({ color: 0x1a3a5c }));
    earth.position.set(0, -14, 0);
    scene.add(earth);
    earth.add(new THREE.Mesh(new THREE.SphereGeometry(12.6, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x4488ff, transparent: true, opacity: 0.07, side: THREE.BackSide })));

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const hemi = new THREE.HemisphereLight(0xf0ede0, 0xa89968, 1.0);
    scene.add(hemi);

    const sun = new THREE.DirectionalLight(0xfff5dd, 1.8);
    sun.position.set(5, 10, 5);
    sun.castShadow = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    sun.shadow.mapSize.set(4096, 4096);
    sun.shadow.bias = -0.0001;
    sun.shadow.normalBias = 0.002;
    sun.shadow.camera.left = -0.6;
    sun.shadow.camera.right = 0.6;
    sun.shadow.camera.top = 0.6;
    sun.shadow.camera.bottom = -0.6;
    sun.shadow.camera.near = 0.1;
    sun.shadow.camera.far = 25;
    scene.add(sun);

    const fill = new THREE.DirectionalLight(0xaaccff, 0.6);
    fill.position.set(-3, 3, -2);
    scene.add(fill);

    const backLight = new THREE.DirectionalLight(0x88aaff, 0.4);
    backLight.position.set(-5, 2, 8);
    scene.add(backLight);

    const camera = new THREE.PerspectiveCamera(50, W / H, 0.00005, 1000);
    camera.position.set(0, 60, 5);
    camera.lookAt(0, 0, 0);

    // ── Tile engine ──────────────────────────────────────────────────────
    const TILE_CONFIGS = [
      { zoom: 14, grid: 2, unit: 3.2, yOff: 0.0005 },
      { zoom: 17, grid: 2, unit: 0.50, yOff: 0.001 },
      { zoom: 19, grid: 3, unit: 0.13, yOff: 0.002 },
    ];
    const texLoader = new THREE.TextureLoader();
    texLoader.crossOrigin = 'anonymous';
    let totalTiles = 0;
    let loadedTiles = 0;
    TILE_CONFIGS.forEach(({ grid }) => { totalTiles += Math.pow(grid * 2 + 1, 2); });

    const buildTileLayer = (urlFn, { trackProgress = false, yShift = 0, transparentPng = false } = {}) => {
      const groups = [];
      const mats = [];
      TILE_CONFIGS.forEach(cfg => {
        const { zoom, grid, unit, yOff } = cfg;
        const { x: cx, y: cy } = latLonToTile(IST_LAT, IST_LON, zoom);
        const g = new THREE.Group();
        g.visible = false;
        for (let dy = -grid; dy <= grid; dy++) {
          for (let dx = -grid; dx <= grid; dx++) {
            texLoader.load(urlFn(cx + dx, cy + dy, zoom), (tex) => {
              if ('colorSpace' in tex) tex.colorSpace = THREE.SRGBColorSpace;
              tex.anisotropy = maxAniso;
              tex.minFilter = THREE.LinearMipmapLinearFilter;
              tex.magFilter = THREE.LinearFilter;
              tex.generateMipmaps = true;
              const mat = new THREE.MeshLambertMaterial({ map: tex, transparent: transparentPng });
              const m = new THREE.Mesh(new THREE.PlaneGeometry(unit, unit), mat);
              m.rotation.x = -Math.PI / 2;
              m.position.set(dx * unit, yOff + yShift, dy * unit);
              m.receiveShadow = true;
              g.add(m);
              mats.push(mat);
              if (trackProgress) { loadedTiles++; setLoadPct(Math.round(loadedTiles / totalTiles * 100)); }
              statsTiles++;
            }, undefined, () => {
              if (trackProgress) { loadedTiles++; setLoadPct(Math.round(loadedTiles / totalTiles * 100)); }
            });
          }
        }
        scene.add(g);
        groups.push({ group: g, zoom });
      });
      return { groups, mats };
    };

    let statsTiles = 0;
    const layerCache = { satellite: buildTileLayer(LAYER_URLS.satellite, { trackProgress: true }) };
    let hybridLabels = null;
    let waybackLayer = null;
    let activeLayer = 'satellite';
    let compareEnabled = false;
    let compareOpacity = 1;

    const tileGroups = layerCache.satellite.groups;

    // ── Campus buildings ──────────────────────────────────────────────────    
    const campusGrp = new THREE.Group();
    campusGrp.visible = false;
    scene.add(campusGrp);
    const bMeshes = [];
    const labelMeshes = [];

    CAMPUS_BUILDINGS.forEach((b, idx) => {
      const bh = b.heightM * M;
      const bldGrp = buildCampusBuilding(b);
      bldGrp.position.set(b.x, 0.002, b.z);
      bldGrp.userData = { name: b.name, idx, category: b.category };

      const cShadow = new THREE.Mesh(
        new THREE.PlaneGeometry(b.w * 1.5, b.d * 1.5),
        new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.2, depthWrite: false })
      );
      cShadow.rotation.x = -Math.PI / 2;
      cShadow.position.y = 0.0004;
      cShadow.userData = { isGroundFx: true };
      bldGrp.add(cShadow);

      const glowPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(b.w * 1.8, b.d * 1.8),
        new THREE.MeshBasicMaterial({
          color: 0x60a5fa,
          transparent: true,
          opacity: 0,
          depthWrite: false,
        })
      );
      glowPlane.rotation.x = -Math.PI / 2;
      glowPlane.position.y = 0.0005;
      glowPlane.userData = { isInteractiveHotspot: true };
      bldGrp.add(glowPlane);

      bldGrp.traverse(child => {
        if (child.isMesh && child.geometry && child.geometry.type === 'BoxGeometry' && !child.userData.isLabel) {
          const p = child.geometry.parameters;
          if (p && p.width > b.w * 0.6 && p.height > bh * 0.5) {
            const edges = new THREE.LineSegments(
              new THREE.EdgesGeometry(child.geometry, 25),
              new THREE.LineBasicMaterial({ color: 0x8a867e, transparent: true, opacity: 0.7 })
            );
            edges.userData = { isLabel: true };
            child.add(edges);
          }
        }
      });

      bldGrp.traverse(child => {
        if (child.isMesh) {
          if (child.userData.isGroundFx === true) return;
          const wasLabel = child.userData.isLabel === true;
          child.userData = { name: b.name, idx, category: b.category, isLabel: wasLabel };
          if (wasLabel) {
            labelMeshes.push(child);
          } else {
            bMeshes.push(child);
          }
        }
      });

      campusGrp.add(bldGrp);
    });

    // ── Raza Block ──────────────────────────────────────────────────────
    const razaGrp = buildRazaBlock(THREE);
    const RH = 9.5 * 0.00072;
    razaGrp.position.set(0, RH / 2 + 0.002, 0);
    razaGrp.visible = false;
    scene.add(razaGrp);

    const razaMarker = new THREE.Group();
    razaMarker.visible = false;
    scene.add(razaMarker);
    const rmRing = new THREE.Mesh(
      new THREE.RingGeometry(0.028, 0.032, 48),
      new THREE.MeshBasicMaterial({ color: 0xf5b942, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false, fog: false })
    );
    rmRing.rotation.x = -Math.PI / 2;
    rmRing.position.y = 0.0035;
    razaMarker.add(rmRing);
    const rmLbl = new THREE.Mesh(
      new THREE.PlaneGeometry(0.055, 0.014),
      new THREE.MeshBasicMaterial({ map: makeRazaHighlightLabel(), transparent: true, depthTest: false, fog: false })
    );
    rmLbl.position.set(0, 0.042, 0);
    rmLbl.renderOrder = 1000;
    razaMarker.add(rmLbl);

    // ── Pin ─────────────────────────────────────────────────────────────
    const pinGrp = new THREE.Group();
    pinGrp.visible = false;
    scene.add(pinGrp);
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.005, 16, 16), new THREE.MeshBasicMaterial({ color: 0xff2255, fog: false }));
    dot.position.set(0, 0.008, 0);
    pinGrp.add(dot);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xff2255, side: THREE.DoubleSide, transparent: true, opacity: 0.7, fog: false });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.012, 0.02, 32), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(0, 0.003, 0);
    pinGrp.add(ring);
    const lblMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.18, 0.03),
      new THREE.MeshBasicMaterial({
        map: makeCanvasTexture([
          { text: '🛰️ Institute of Space Technology', font: 'bold 52px Arial', color: '#fff', y: 70 },
          { text: 'Islamabad Expressway, Pakistan', font: '36px Arial', color: 'rgba(255,255,255,0.7)', y: 124 },
        ], 1024, 160),
        transparent: true,
        depthTest: false,
        fog: false
      })
    );
    lblMesh.position.set(0, 0.12, 0);
    lblMesh.renderOrder = 999;
    pinGrp.add(lblMesh);

    // ── Route group ─────────────────────────────────────────────────────
    const routeGrp = new THREE.Group();
    scene.add(routeGrp);
    const clearRoute = () => {
      while (routeGrp.children.length) {
        const ch = routeGrp.children.pop();
        if (ch.geometry) ch.geometry.dispose();
        if (ch.material) ch.material.dispose();
      }
    };
    const drawRoute = (a, b) => {
      clearRoute();
      const pa = new THREE.Vector3(a.x, 0.0035, a.z);
      const pb = new THREE.Vector3(b.x, 0.0035, b.z);
      const mid = pa.clone().lerp(pb, 0.5);
      mid.y = 0.0035;
      const perp = new THREE.Vector3(-(pb.z - pa.z), 0, pb.x - pa.x).normalize().multiplyScalar(pa.distanceTo(pb) * 0.12);
      mid.add(perp);
      const curve = new THREE.CatmullRomCurve3([pa, mid, pb]);
      const pts = curve.getPoints(60);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(geo, new THREE.LineDashedMaterial({
        color: 0xf5b942, dashSize: 0.006, gapSize: 0.004, transparent: true, opacity: 0.95, fog: false, depthTest: false
      }));
      line.computeLineDistances();
      line.renderOrder = 998;
      routeGrp.add(line);
      [pa, pb].forEach((p, i) => {
        const mk = new THREE.Mesh(new THREE.SphereGeometry(0.0035, 12, 12),
          new THREE.MeshBasicMaterial({ color: i === 0 ? 0x34d399 : 0xf5b942, fog: false, depthTest: false }));
        mk.position.copy(p);
        mk.renderOrder = 998;
        routeGrp.add(mk);
      });
      let distU = 0;
      for (let i = 1; i < pts.length; i++) distU += pts[i].distanceTo(pts[i - 1]);
      const distM = Math.round(distU * METERS_PER_UNIT);
      const mins = Math.max(1, Math.round(distM / 1.4 / 60));
      return { distM, mins };
    };

    // ── Raycaster ───────────────────────────────────────────────────────
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hovIdx = -1;
    const origMats = bMeshes.map(m => {
      const mt = Array.isArray(m.material) ? m.material : [m.material];
      return mt.map(mat => mat.color ? mat.color.clone() : null);
    });
    const restoreBuilding = (idx) => {
      bMeshes.forEach((m, mi) => {
        if (m.userData.idx === idx) {
          const mats = Array.isArray(m.material) ? m.material : [m.material];
          mats.forEach((mat, j) => { if (mat.color && origMats[mi][j]) mat.color.copy(origMats[mi][j]); });
        }
      });
    };
    const tintBuilding = (idx, hex) => {
      bMeshes.forEach((m) => {
        if (m.userData.idx === idx) {
          const mats = Array.isArray(m.material) ? m.material : [m.material];
          mats.forEach(mat => { if (mat.color) mat.color.set(hex); });
        }
      });
    };

    let flashIdx = -1, flashUntil = 0;

    // ── Animation ────────────────────────────────────────────────────────
    const ZOOM_MS = 4500;
    let zStart = null, exploring = false;
    let rotY = 0, rotX = 0.62, radius = 1.8, ringT = 0;
    let tRotY = 0, tRotX = 0.62, tRadius = 1.8;
    const MIN_R = 0.008, MAX_R = 20;
    const target = new THREE.Vector3(0, 0, 0);
    const tTarget = new THREE.Vector3(0, 0, 0);

    // ── Mouse handlers ───────────────────────────────────────────────────
    const onMM = (e) => {
      if (!exploring || !campusGrp.visible || showPanorama) return;
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(bMeshes);
      if (hits.length > 0) {
        const idx = hits[0].object.userData.idx;
        if (idx !== undefined && idx !== hovIdx) {
          if (hovIdx >= 0 && hovIdx !== flashIdx) restoreBuilding(hovIdx);
          hovIdx = idx;
          setHoveredIdx(idx);
          if (idx !== flashIdx) tintBuilding(idx, 0x88bbff);
        }
      } else {
        if (hovIdx >= 0) {
          if (hovIdx !== flashIdx) restoreBuilding(hovIdx);
          hovIdx = -1;
          setHoveredIdx(null);
        }
      }
    };

    let routeModeOn = false, routeFrom = -1;
    let downX = 0, downY = 0;
    const onClick = (e) => {
      if (!exploring || !campusGrp.visible || showPanorama) return;
      if (Math.abs(e.clientX - downX) > 5 || Math.abs(e.clientY - downY) > 5) return;
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(bMeshes);
      if (hits.length === 0) { if (!routeModeOn) setPinnedIdx(null); return; }
      const idx = hits[0].object.userData.idx;
      if (idx === undefined) return;
      if (routeModeOn) {
        if (routeFrom < 0 || routeFrom === idx) {
          routeFrom = idx;
          clearRoute();
          setRoute({ from: CAMPUS_BUILDINGS[idx].name, to: null, distM: 0, mins: 0 });
        } else {
          const { distM, mins } = drawRoute(CAMPUS_BUILDINGS[routeFrom], CAMPUS_BUILDINGS[idx]);
          setRoute({ from: CAMPUS_BUILDINGS[routeFrom].name, to: CAMPUS_BUILDINGS[idx].name, distM, mins });
          routeFrom = -1;
        }
      } else {
        setPinnedIdx(idx);
      }
    };

    renderer.domElement.addEventListener('mousemove', onMM);
    renderer.domElement.addEventListener('click', onClick);

    const camAtT = (t) => {
      const e = easeInOutCubic(t);
      return new THREE.Vector3(0, 60 * (1 - e) + 0.6 * e, 5 * (1 - e) + 1.5 * e);
    };
    const updateExpCam = () => {
      if (showPanorama) return;
      tRotX = Math.max(0.12, Math.min(Math.PI / 2 - 0.04, tRotX));
      tRadius = Math.max(MIN_R, Math.min(MAX_R, tRadius));
      rotY += (tRotY - rotY) * 0.12;
      rotX += (tRotX - rotX) * 0.12;
      radius += (tRadius - radius) * 0.14;
      target.lerp(tTarget, 0.08);
      rotX = Math.max(0.12, Math.min(Math.PI / 2 - 0.04, rotX));
      camera.position.set(
        target.x + radius * Math.sin(rotY) * Math.cos(rotX),
        target.y + radius * Math.sin(rotX),
        target.z + radius * Math.cos(rotY) * Math.cos(rotX)
      );
      camera.lookAt(target);
    };

    const getActiveGroups = () => layerCache[activeLayer] ? layerCache[activeLayer].groups : layerCache.satellite.groups;

    const updateVisibility = () => {
      if (showPanorama) return;
      const h = camera.position.y;

      groundFog.near = Math.max(0.3, radius * 1.6);
      groundFog.far = Math.max(4, radius * 9);

      Object.keys(layerCache).forEach(key => {
        layerCache[key].groups.forEach(({ group }) => { group.visible = false; });
      });
      if (hybridLabels) hybridLabels.groups.forEach(({ group }) => { group.visible = false; });
      if (waybackLayer) waybackLayer.groups.forEach(({ group }) => { group.visible = false; });

      const applyLOD = ({ group, zoom }) => {
        if (zoom === 14) group.visible = h > 3;
        else if (zoom === 17) group.visible = h > 0.25 && h <= 6;
        else if (zoom === 19) group.visible = h <= 1.0;
      };
      getActiveGroups().forEach(applyLOD);
      if (activeLayer === 'hybrid' && hybridLabels) hybridLabels.groups.forEach(applyLOD);
      if (compareEnabled && waybackLayer && (activeLayer === 'satellite' || activeLayer === 'hybrid'))
        waybackLayer.groups.forEach(applyLOD);

      const veryClose = h <= 0.15;
      const closeEnough = h <= 0.8;
      campusGrp.visible = closeEnough;
      razaGrp.visible = veryClose;

      const pinScale = Math.min(1, Math.max(0.12, h / 0.9));
      pinGrp.scale.setScalar(pinScale);
      ring.visible = h > 0.22;
      lblMesh.visible = h > 0.18;

      razaMarker.visible = closeEnough && !veryClose;
      if (razaMarker.visible) {
        rmLbl.lookAt(camera.position);
        const rmScale = Math.min(1.4, Math.max(0.5, h / 0.35));
        rmLbl.scale.setScalar(rmScale);
      }

      if (closeEnough) {
        const lp = new THREE.Vector3();
        const maxDist = Math.max(0.4, h * 2.2);
        labelMeshes.forEach(lab => {
          lab.getWorldPosition(lp);
          const dist = lp.distanceTo(camera.position);
          lab.visible = h <= 0.8 && dist < maxDist;
          if (lab.visible) {
            lab.lookAt(camera.position);
            const scale = clarityMode
              ? Math.min(1.4, Math.max(0.6, 0.9 / (dist * 0.2 + 0.3)))
              : Math.min(1.2, Math.max(0.4, 0.7 / (dist * 0.3 + 0.4)));
            lab.scale.setScalar(scale);
          }
        });
      }
    };

    let fpsFrames = 0, fpsLast = performance.now();

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      ringT += 0.04;
      ring.scale.setScalar(1 + 0.4 * Math.abs(Math.sin(ringT)));
      ringMat.opacity = 0.2 + 0.5 * Math.abs(Math.sin(ringT));

      if (flashIdx >= 0) {
        if (performance.now() > flashUntil) { restoreBuilding(flashIdx); flashIdx = -1; }
        else {
          const pulse = Math.abs(Math.sin(performance.now() * 0.008));
          tintBuilding(flashIdx, pulse > 0.5 ? 0xf5b942 : 0xffe9b0);
        }
      }

      if (!exploring) {
        if (!zStart) zStart = performance.now();
        const t = Math.min((performance.now() - zStart) / ZOOM_MS, 1);
        camera.position.copy(camAtT(t));
        camera.lookAt(0, 0, 0);
        starMat.opacity = Math.max(0, 1 - easeInOutCubic(t) * 2.5);
        earth.visible = t < 0.65;
        tileGroups[0].group.visible = t > 0.15;
        tileGroups[1].group.visible = t > 0.5;
        tileGroups[2].group.visible = t > 0.85;
        pinGrp.visible = t > 0.7;
        campusGrp.visible = false;
        razaGrp.visible = false;
        if (t >= 1) {
          exploring = true;
          setPhase('explore');
          skyDome.visible = true;
          scene.fog = groundFog;
          renderer.setClearColor(0xd0d0d0, 1);
          updateExpCam();
        }
      } else {
        if (!showPanorama) {
          updateExpCam();
          updateVisibility();
        }
        earth.visible = false;
        pinGrp.visible = true;
        starMat.opacity = 0;
        lblMesh.lookAt(camera.position);
      }
      renderer.render(scene, camera);

      fpsFrames++;
      const now = performance.now();
      if (now - fpsLast >= 500) {
        const fps = Math.round(fpsFrames * 1000 / (now - fpsLast));
        fpsFrames = 0;
        fpsLast = now;
        setStats({ fps, tiles: statsTiles, altM: Math.max(0, Math.round(camera.position.y * METERS_PER_UNIT)) });
      }
    };
    animate();

    // ── Bridge ───────────────────────────────────────────────────────────
    ctrlRef.current = {
      setLayer: (key) => {
        if (key === 'hybrid') {
          if (!layerCache.hybrid) layerCache.hybrid = buildTileLayer(LAYER_URLS.satellite);
          if (!hybridLabels) hybridLabels = buildTileLayer(LAYER_URLS.labels, { yShift: 0.0003, transparentPng: true });
        } else if (!layerCache[key]) {
          layerCache[key] = buildTileLayer(LAYER_URLS[key]);
        }
        activeLayer = key;
      },
      flyTo: (idx) => {
        const b = CAMPUS_BUILDINGS[idx];
        tTarget.set(b.x, 0, b.z);
        tRadius = 0.09;
        tRotX = 0.85;
        if (flashIdx >= 0) restoreBuilding(flashIdx);
        flashIdx = idx;
        flashUntil = performance.now() + 3000;
        setPinnedIdx(idx);
      },
      resetView: () => { tTarget.set(0, 0, 0); tRadius = 0.5; tRotX = 0.62; },
      setSun: (hour) => {
        const t = Math.min(1, Math.max(0, (hour - 5) / 14));
        const elev = Math.sin(Math.PI * t);
        const az = (t - 0.5) * Math.PI * 1.5;
        sun.position.set(Math.sin(az) * 8, Math.max(0.6, elev * 9), -Math.cos(az) * 6);
        const warm = new THREE.Color(0xff9a4d), noon = new THREE.Color(0xfff5dd);
        sun.color.copy(warm).lerp(noon, Math.min(1, elev * 1.6));
        sun.intensity = 0.5 + elev * 1.0;
        hemi.intensity = 0.35 + elev * 0.6;
        renderer.toneMappingExposure = 0.9 + elev * 0.3;
      },
      setRouteMode: (on) => { routeModeOn = on; if (!on) { routeFrom = -1; clearRoute(); } },
      setCompare: (on) => {
        compareEnabled = on;
        if (on && !waybackLayer) waybackLayer = buildTileLayer(LAYER_URLS.wayback2014, { yShift: -0.0003 });
        if (!on) {
          layerCache.satellite.mats.forEach(mat => { mat.transparent = false; mat.opacity = 1; mat.needsUpdate = true; });
          if (layerCache.hybrid) layerCache.hybrid.mats.forEach(mat => { mat.transparent = false; mat.opacity = 1; mat.needsUpdate = true; });
        } else {
          ctrlRef.current.setCompareValue(compareOpacity * 100);
        }
      },
      setCompareValue: (v) => {
        compareOpacity = v / 100;
        const apply = (mat) => { mat.transparent = true; mat.opacity = compareOpacity; mat.needsUpdate = true; };
        layerCache.satellite.mats.forEach(apply);
        if (layerCache.hybrid) layerCache.hybrid.mats.forEach(apply);
      },
    };

    // ── Controls ──────────────────────────────────────────────────────────
    let drag = false, px = 0, py = 0;
    const onDown = (e) => { if (!exploring || showPanorama) return; drag = true; px = e.clientX ?? e.touches?.[0]?.clientX ?? 0; py = e.clientY ?? e.touches?.[0]?.clientY ?? 0; downX = px; downY = py; };
    const onUp = () => { drag = false; };
    const onMove = (e) => { if (!drag || !exploring || showPanorama) return; const cx = e.clientX ?? e.touches?.[0]?.clientX ?? px; const cy = e.clientY ?? e.touches?.[0]?.clientY ?? py; tRotY += (cx - px) * 0.004; tRotX -= (cy - py) * 0.004; px = cx; py = cy; };
    const onWheel = (e) => { if (!exploring || showPanorama) return; e.preventDefault(); tRadius = Math.max(MIN_R, Math.min(MAX_R, tRadius + e.deltaY * 0.003 * Math.max(0.03, tRadius * 0.6))); };
    renderer.domElement.addEventListener('mousedown', onDown);
    renderer.domElement.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', e => onMove(e), { passive: true });
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false });
    const onResize = () => { const w = el.clientWidth; const h = el.clientHeight; camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h); };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      ctrlRef.current = null;
      renderer.domElement.removeEventListener('mousemove', onMM);
      renderer.domElement.removeEventListener('click', onClick);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [showPanorama]);

  // ── UI handlers ────────────────────────────────────────────────────────────
  const handleLayer = (key) => { setLayer(key); ctrlRef.current?.setLayer(key); };
  const handleSearchPick = (idx) => { setQuery(''); ctrlRef.current?.flyTo(idx); };
  const handleSun = (v) => { const hr = Number(v); setSunHour(hr); ctrlRef.current?.setSun(hr); };
  const handleRouteMode = () => {
    const next = !routeMode;
    setRouteMode(next);
    setRoute(null);
    ctrlRef.current?.setRouteMode(next);
  };
  const handleCompare = () => {
    const next = !compareOn;
    setCompareOn(next);
    ctrlRef.current?.setCompare(next);
    if (next) ctrlRef.current?.setCompareValue(compareVal);
  };
  const handleCompareVal = (v) => { const n = Number(v); setCompareVal(n); ctrlRef.current?.setCompareValue(n); };
  const toggleClarityMode = () => { setClarityMode(!clarityMode); };

  const results = query.trim().length > 0
    ? CAMPUS_BUILDINGS.map((b, i) => ({ ...b, idx: i }))
        .filter(b => b.name.toLowerCase().includes(query.trim().toLowerCase()) || b.dept.toLowerCase().includes(query.trim().toLowerCase()))
        .slice(0, 6)
    : [];

  const cardIdx = pinnedIdx ?? hoveredIdx;
  const card = cardIdx != null ? CAMPUS_BUILDINGS[cardIdx] : null;

  const fmtHour = (h) => { const hh = Math.floor(h); const ap = hh >= 12 ? 'PM' : 'AM'; const d = hh % 12 === 0 ? 12 : hh % 12; return `${d}:00 ${ap}`; };
  const pkTime = new Date(liveTime.getTime() + 5 * 3600000).toISOString().substring(11, 19) + ' PKT';
  const panel = {
    position: 'absolute',
    background: 'rgba(4,4,18,0.88)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(79,70,229,0.4)',
    borderRadius: 12,
    padding: '10px 14px',
    color: '#fff',
    fontSize: 11,
    lineHeight: 1.75,
    pointerEvents: 'none',
    zIndex: 10
  };

  const LAYER_OPTIONS = [
    { key: 'satellite', label: 'Satellite' },
    { key: 'map', label: 'Map' },
    { key: 'terrain', label: 'Terrain' },
    { key: 'hybrid', label: 'Hybrid' },
  ];

  return (
    <div style={{ position: 'relative', userSelect: 'none' }}>
      {/* ── Three.js Container ── */}
      <div ref={containerRef} className={styles.mapWrapper} style={{ display: showPanorama ? 'none' : 'block' }} />

      {/* ── CUSTOM PANORAMA VIEWER - YOUR 7 IMAGES ── */}
      {showPanorama && (
        <PanoramaViewer
          images={PANORAMA_DATA}
          onClose={togglePanorama}
          initialIndex={panoramaStartIndex}
        />
      )}

      {/* ── Loading ── */}
      {phase === 'zoom' && loadPct < 100 && !showPanorama && (
        <div style={{ ...panel, top: 20, right: 20, minWidth: 200 }}>
          <div style={{ opacity: 0.6, marginBottom: 8 }}>Loading Satellite Tiles...</div>
          <div style={{ height: 6, background: 'rgba(96,165,250,0.2)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: loadPct + '%', background: 'linear-gradient(90deg,#60a5fa,#93c5fd)', transition: 'width 0.3s ease' }} />
          </div>
          <div style={{ marginTop: 8, fontSize: 10, textAlign: 'right' }}>{loadPct}%</div>
        </div>
      )}

      {/* ── CLARITY LEGEND ── */}
      {phase === 'explore' && clarityMode && !showPanorama && (
        <div className={styles.legendPanel}>
          <div className={styles.legendTitle}>🏷️ Building Categories</div>
          <div className={styles.legendGrid}>
            {Object.entries(CATEGORY_NAMES).map(([key, label]) => (
              <div key={key} className={styles.legendItem}>
                <span className={styles.legendColor} style={{ background: '#' + getCategoryColor(key).toString(16).padStart(6, '0') }}></span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── CLARITY TOGGLE ── */}
      {phase === 'explore' && !showPanorama && (
        <button
          type="button"
          className={`${styles.clarityBtn} ${clarityMode ? styles.clarityBtnActive : ''}`}
          onClick={toggleClarityMode}
        >
          {clarityMode ? '🔍 Clarity Mode ON' : '🔍 Show Details'}
        </button>
      )}

      {/* ── Layer bar ── */}
      {phase === 'explore' && !showPanorama && (
        <div className={styles.layerBar}>
          {LAYER_OPTIONS.map(o => (
            <button
              key={o.key}
              type="button"
              className={`${styles.layerBtn} ${layer === o.key ? styles.layerBtnActive : ''}`}
              onClick={() => handleLayer(o.key)}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}

      {/* ── Search ── */}
      {phase === 'explore' && !showPanorama && (
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="🔍 Find a building… (e.g. Library, Raza Block)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => {
              if (e.nativeEvent.isComposing || e.keyCode === 229) return;
              if (e.key === 'Enter' && results.length > 0) handleSearchPick(results[0].idx);
            }}
            aria-label="Search campus buildings"
          />
          {results.length > 0 && (
            <div className={styles.searchResults}>
              {results.map(r => (
                <button key={r.idx} type="button" className={styles.searchResultItem} onClick={() => handleSearchPick(r.idx)}>
                  <span className={styles.searchResultColor} style={{ background: '#' + getCategoryColor(r.type).toString(16).padStart(6, '0') }}></span>
                  {r.name}
                  <span className={styles.searchResultMeta}>{r.category} · {r.heightM} m · built {r.builtYear}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Weather ── */}
      {phase === 'explore' && weather && !showPanorama && (
        <div style={{ ...panel, top: 64, left: 16 }}>
          <div><strong>IST Weather</strong></div>
          <div>{weather.desc}</div>
          <div>Temp: {weather.temp}°C</div>
          <div>Wind: {weather.wind} km/h</div>
          <div>Humidity: {weather.hum}%</div>
        </div>
      )}

      {/* ── Clock + Stats ── */}
      {phase === 'explore' && !showPanorama && (
        <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 20, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
          <div style={{ ...panel, position: 'static', pointerEvents: 'none' }}>
            <div><strong>{pkTime}</strong></div>
            <div style={{ opacity: 0.7, marginTop: 6 }}>IST Campus</div>
          </div>
          <button
            type="button"
            className={`${styles.pillBtn} ${showStats ? styles.pillBtnGreen : ''}`}
            onClick={() => setShowStats(s => !s)}
          >
            {showStats ? 'Stats: ON' : 'Stats'}
          </button>
          {showStats && (
            <div className={styles.statsPanel}>
              <div>FPS: {stats.fps}</div>
              <div>Tiles cached: {stats.tiles}</div>
              <div>Cam alt: {stats.altM.toLocaleString()} m</div>
            </div>
          )}
        </div>
      )}

      {/* ── Info Card ── */}
      {phase === 'explore' && card && !showPanorama && (
        <div className={styles.infoCard}>
          {pinnedIdx != null && <div className={styles.infoCardPin}>📌 Pinned</div>}
          {pinnedIdx != null && (
            <button type="button" className={styles.infoCardClose} onClick={() => setPinnedIdx(null)} aria-label="Close info card">✕</button>
          )}
          <div className={styles.infoCardTitle}>
            <span className={styles.infoCardColor} style={{ background: '#' + getCategoryColor(card.type).toString(16).padStart(6, '0') }}></span>
            🏢 {card.name}
          </div>
          <div className={styles.infoCardRow}><span className={styles.infoCardLabel}>Category</span><span className={styles.infoCardValue}>{card.category || getCategoryName(card.type)}</span></div>
          <div className={styles.infoCardRow}><span className={styles.infoCardLabel}>Department</span><span className={styles.infoCardValue}>{card.dept}</span></div>
          <div className={styles.infoCardRow}><span className={styles.infoCardLabel}>Built</span><span className={styles.infoCardValue}>{card.builtYear}</span></div>
          <div className={styles.infoCardRow}><span className={styles.infoCardLabel}>Height</span><span className={styles.infoCardValue}>{card.heightM} m · {card.floors || 'N/A'} {card.floors === 1 ? 'floor' : 'floors'}</span></div>
          <div className={styles.infoCardRow}><span className={styles.infoCardLabel}>Area</span><span className={styles.infoCardValue}>{card.areaM2.toLocaleString()} m²</span></div>
          <div className={styles.infoCardRow}><span className={styles.infoCardLabel}>Hours</span><span className={styles.infoCardValue}>{card.hours}</span></div>
          {pinnedIdx == null && <div style={{ marginTop: 6, fontSize: 9, opacity: 0.5 }}>Click the building to pin this card</div>}
        </div>
      )}

      {/* ── Bottom Controls ── */}
      {phase === 'explore' && !showPanorama && (
        <div className={styles.bottomBar}>
          {compareOn && (
            <div className={styles.sliderPanel}>
              <span className={styles.sliderLabel}>2014</span>
              <input
                className={styles.rangeInput}
                type="range" min="0" max="100" step="1"
                value={compareVal}
                onChange={e => handleCompareVal(e.target.value)}
                aria-label="Compare 2014 vs today imagery"
              />
              <span className={styles.sliderValue}>Today</span>
            </div>
          )}
          <div className={styles.sliderPanel}>
            <span className={styles.sliderLabel}>☀️ Sun</span>
            <input
              className={styles.rangeInput}
              type="range" min="5" max="19" step="0.5"
              value={sunHour}
              onChange={e => handleSun(e.target.value)}
              aria-label="Time of day sun angle"
            />
            <span className={styles.sliderValue}>{fmtHour(sunHour)}</span>
            <button
              type="button"
              className={`${styles.pillBtn} ${routeMode ? styles.pillBtnActive : ''}`}
              onClick={handleRouteMode}
            >
              {routeMode ? 'Routing…' : '🚶 Route'}
            </button>
            <button
              type="button"
              className={`${styles.pillBtn} ${compareOn ? styles.pillBtnActive : ''}`}
              onClick={handleCompare}
            >
              🕐 2014 ⇄ Now
            </button>
            <button
              type="button"
              className={`${styles.pillBtn} ${clarityMode ? styles.pillBtnActive : ''}`}
              onClick={toggleClarityMode}
            >
              {clarityMode ? '🔍 Clarity' : '🔍 Detail'}
            </button>
          </div>
        </div>
      )}

      {/* ── PANORAMA TOGGLE BUTTON ── */}
      {phase === 'explore' && (
        <button
          className={`${styles.panoramaToggleBtn} ${showPanorama ? styles.panoramaToggleActive : ''}`}
          onClick={togglePanorama}
          title={showPanorama ? 'Exit Campus Tour' : '🌍 Dive into Real Campus 3D View'}
        >
          {showPanorama ? '✕' : '🌍'}
        </button>
      )}

      {/* ── Route Panel ── */}
      {phase === 'explore' && routeMode && !showPanorama && (
        <div style={{ position: 'absolute', bottom: 16, right: 16, zIndex: 20 }}>
          <div className={styles.routePanel}>
            <div className={styles.routeTitle}>🚶 Walking Route</div>
            {!route && <div style={{ opacity: 0.75 }}>Click a building to set the start point.</div>}
            {route && !route.to && <div style={{ opacity: 0.85 }}>From: <strong>{route.from}</strong><br />Now click the destination…</div>}
            {route && route.to && (
              <div>
                <div>From: <strong>{route.from}</strong></div>
                <div>To: <strong>{route.to}</strong></div>
                <div style={{ marginTop: 4, color: '#f5b942' }}>
                  ≈ {route.distM.toLocaleString()} m · ~{route.mins} min walk
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {phase === 'explore' && !routeMode && !showPanorama && (
        <div style={{ ...panel, bottom: 16, right: 16, maxWidth: 280, fontSize: 10 }}>
          <div><strong>Campus Controls</strong></div>
          <div style={{ marginTop: 8, opacity: 0.7 }}>
            🖱️ <strong>Drag</strong> to rotate<br />
            🔄 <strong>Scroll in</strong> to zoom — see Raza Block!<br />
            📍 Hover buildings · <strong>Click</strong> to pin info<br />
            🔎 Search to fly anywhere instantly<br />
            🌍 Click the <strong>🌍 button</strong> for Real 3D Campus View!
          </div>
        </div>
      )}
    </div>
  );
};

export default CampusMap3D;