/**
 * The tabs functionality of the "Prices" section.
 */
const links = document.querySelectorAll('.js-tab-link');
const tabs = document.querySelectorAll('.js-tab');
const toggleCurrentClass = (elements, property, current) => elements.forEach((element) => {
	const method = element[property].indexOf(current) > -1
		? 'add'
		: 'remove';

	element.classList[method]('is-current');
});

links.forEach(link => link.addEventListener('click', (e) => {
	e.preventDefault();

	const id = e.target.attributes.href.value.slice(1);

	toggleCurrentClass(links, 'href', id);
	toggleCurrentClass(tabs, 'id', id);
}));
