const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('inpust', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;