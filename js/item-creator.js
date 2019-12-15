const getElementFromTemplate = function (textElement) {
  const wrapper = document.createElement(`div`);
  return wrapper.innerHTML(textElement);
};


export default getElementFromTemplate;
