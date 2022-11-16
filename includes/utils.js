/* Snipets de codigo Java y/o SQL reutilizables */
/* https://cloud.google.com/dataform/docs/reuse-code-includes */

function ifNullZero(parameter){
    return `if( ${parameter} is null, 0, ${parameter} )`;
}