import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/service';
import Pagination from '../components/Pagination';

const PER_PAGE = 10;

export default function PublicationsPage() {
  const [data, setData] = useState({ results: [], count: 0, total_pages: 1, current_page: 1 });
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.getPublications(page, PER_PAGE).then(setData).catch(() =>
      setData({ results: [], count: 0, total_pages: 1, current_page: 1 })
    );
  }, [page]);

  return (
    <div className="page work-list-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Publications</h1>
          <p className="page-subtitle">All publications</p>
          <Link to="/#publications" className="page-back">← Back to Home</Link>
        </header>
        {data.results?.length ? (
          <>
            <ul className="work-list">
              {data.results.map((item) => (
                <li key={item.id} className="work-item">
                  <h3 className="work-item-title">{item.title}</h3>
                  {item.description && <p className="work-item-desc">{item.description}</p>}
                  {item.link_url && (
                    <a href={item.link_url} target="_blank" rel="noopener noreferrer" className="work-item-link">
                      {item.link_text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            {data.total_pages > 1 && (
              <Pagination
                currentPage={data.current_page}
                totalPages={data.total_pages}
                onPageChange={setPage}
              />
            )}
          </>
        ) : (
          <p className="work-list-empty">No publications yet.</p>
        )}
      </div>
    </div>
  );
}
