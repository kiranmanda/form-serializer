function serialize (fields) {
	const merge = require('lodash/merge');
	const get = (keys, value) => {
		const key = keys.pop();
    const obj = {[key]: value};
		if (keys && keys.length === 0) {
			return obj;
		}
		return get(keys, obj);
	};
	let output = {};
	fields.forEach(field => {
    const parts = field.name.split('.');
    output = merge(output, get(parts, field.value));
	});
	return output;
}

const fields = [
  {name: 'pet.animal.dog.name', value: 'Pablo'},
  {name: 'pet.bird.parrot.name', value: 'Escabar'},
];

console.log(JSON.stringify(serialize(fields)));
