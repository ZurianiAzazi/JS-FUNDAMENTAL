const firstName = 'sara';
const age = 37;
const job = 'developer';

let val ;

//without template literals
val = '<ul>'+
'<li>Name: '+firstName+'</li>'+
'<li>Age: '+age+'</li>'+
'<li>Job: '+job+'</li>'+
'</ul>';

// with template literal
val = `
<ul>
<li>Name: ${firstName}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
</ul>`;

document.body.innerHTML = val;