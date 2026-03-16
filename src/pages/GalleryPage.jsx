import { useState, useEffect } from 'react';
import { api } from '../api/service';
import Pagination from '../components/Pagination';

const PER_PAGE = 12;

export default function GalleryPage() {
  const [data, setData] = useState({ results: [], count: 0, total_pages: 1, current_page: 1 });
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.getGallery(page, PER_PAGE).then(setData).catch(() =>
      setData({ results: [], count: 0, total_pages: 1, current_page: 1 })
    );
  }, [page]);

if(!data.results?.length){
  return <Text>Loading......</Text>
}

  return (
    <div className="page gallery-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Gallery</h1>
          <p className="page-subtitle">A glimpse of life and moments</p>
        </header>
        {data.results?.length ? (
          <>
            <div className="gallery-grid">
              {data.results.map((item) => (
                <figure key={item.id} className="gallery-item">
                  <img src={item.image} alt={item.title || 'Gallery'} loading="lazy" />
                  {item.title && <figcaption>{item.title}</figcaption>}
                </figure>
              ))}
            </div>
            {data.total_pages > 1 && (
              <Pagination
                currentPage={data.current_page}
                totalPages={data.total_pages}
                onPageChange={setPage}
              />
            )}
          </>
        ) : (
          <p className="gallery-empty">No images in the gallery yet.</p>
        )}
      </div>
    </div>
  );
}
