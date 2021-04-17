import { getAllScps } from '../../services/skipService';
import { useState, useEffect } from 'react';
import { ScpListItem } from './scp-list-item/scp-list-item';

export const SCPS = () => {
  const [scps, setScps] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAllScps().then(skips => {
      if (mounted) {
        setScps(skips);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <section className='app-page'>
      <h4 className='h4 underline-before'>All Objects</h4>
      <section className='list-container'>
        {scps.map(skip => (
          <ScpListItem scp={skip} key={skip._id} />
        ))}
      </section>
    </section>
  );
};
