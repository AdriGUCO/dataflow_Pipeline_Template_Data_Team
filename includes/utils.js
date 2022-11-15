/* Snipets de codigo SQL reutilizables */

function ifNullZero(parameter){
    return `if( ${parameter} is null, 0, ${parameter} )`;
}