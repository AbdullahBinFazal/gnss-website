import { Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './SearchBar.module.css';

const { Paragraph } = Typography;

const SearchBar = ({ searchTerm, setSearchTerm, totalResults }) => {
  return (
    <div className={styles.searchContainer}>
      <Input
        size="large"
        placeholder="🔍 Search for your question..."
        prefix={<SearchOutlined />}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
        allowClear
      />
      {searchTerm && (
        <Paragraph className={styles.searchResults}>
          Found {totalResults} results
        </Paragraph>
      )}
    </div>
  );
};

export default SearchBar;