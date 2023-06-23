/*eslint-disable*/
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function useAppContext() {
  const {
    selectedTemplate,
    setSelectedTemplate
  } = useContext(AppContext);
  return {
    selectedTemplate,
    setSelectedTemplate
  };
}

export default useAppContext;
