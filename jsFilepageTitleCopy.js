javascript:(() => {
	const ta = document.createElement('textarea');
	const addMmbo = document.URL.includes('jira.gfk.com')
		&& document.URL.includes('browse/MAMBO')
		&& !document.title.toString().includes('MAMBO-');
	let taVal = addMmbo ? 'MAMBO-' : '';
	taVal += document.title.toString();
	ta.value = taVal;
	document.body.appendChild(ta);
	ta.select();
	document.execCommand('copy');
	document.body.removeChild(ta);
}
)()
