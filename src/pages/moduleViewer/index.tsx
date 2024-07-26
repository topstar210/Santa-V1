import { useLocation } from 'react-router-dom';

const ModuleViewer = () => {
  const localtion = useLocation();
  const params = new URLSearchParams(localtion.search);

  const link: any = params.get('link');

  return (
    <div>
      <iframe src={link} width={'100%'} height={window.innerHeight - 10}></iframe>
    </div>
  );
};

export default ModuleViewer;
