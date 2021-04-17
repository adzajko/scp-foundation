import { Link } from 'react-router-dom';

export const ScpListItem = ({ scp }) => {
  return (
    <div className='scp-list-item'>
      <header className='scp-list-item__header'>
        <h5 className='h5'>{scp.designation}</h5>
        <h5 className={`h5 ${scp.objectClass}`}>{scp.objectClass}</h5>
      </header>
      <main className='scp-list-item__main'>
        <Link className='h5 no-decoration' to={`/scps/${scp._id}`}>
          {scp.scpName}
        </Link>
      </main>
    </div>
  );
};
