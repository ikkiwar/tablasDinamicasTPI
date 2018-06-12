class TextBox extends HTMLElement{
    /**
     * Webcomponet con mayor utilidad que el de Barra :v
     * Crea un campo de texto con el tipo de validacion 
     * que se desee
     */
    constructor(){
        super();
    }

    connectedCallback(){
        const sd = this.attachShadow({mode:'closed'});
        const contenedor = document.createElement('div');
        contenedor.id = 'id_contenedor';

        const estilo = `
        <style>
            input:invalid {
                border: 1px solid red;
            }
            input:valid {
                border: 1px solid green;
            }
                
            input:required:invalid {        
                border: 1px solid red;
            }
            input:required:valid {
            border: 1px solid green;
            }

            input{
                font-family: "Gill Sans", sans-serif;
            }
            </style>`;
        sd.innerHTML = estilo;
        //Metodo que crea el input validado
        let crearEntrada = function(opcion){
            switch (opcion) {
                case 'numerico':
                var nuevoInput = esNumero();
                contenedor.appendChild(nuevoInput);
                sd.appendChild(contenedor);
                    break;
                case 'alfabetico':
                var nuevoInput = esLetra();
                contenedor.appendChild(nuevoInput);
                sd.appendChild(contenedor);
                    break;
                case 'telefono':
                var nuevoInput = esTelefono();
                contenedor.appendChild(nuevoInput);
                sd.appendChild(contenedor);
                    break;
                case 'correo':
                var nuevoInput = esCorreo();
                contenedor.appendChild(nuevoInput);
                sd.appendChild(contenedor);
                    break;
                default:
                    break;
            }
        }

        let esNumero = function(){
            const entrada = document.createElement('input');
            entrada.type = 'number';
            entrada.step = 0;
            entrada.pattern = /[0-9]+/;
            entrada.title = 'Solo se puede ingresar numeros';
            estiloEntrada(entrada);
            return entrada;
        } 

        let esLetra = function(){
            const entrada = document.createElement('input');
            entrada.type = 'text';
            entrada.pattern = /[a-zA-Z]+/;
            entrada.title = 'Solo se puede ingresar letras';
            estiloEntrada(entrada);
            return entrada;
        }

        let esTelefono = function(){
            const entrada = document.createElement('input');
            entrada.type = 'number';
            entrada.pattern = /^[2|6|7][0-9]{7}/;
            entrada.title = 'El numero de telefono debe empezar por 2,6 ó 7 y debe ser de 8 digitos';
            estiloEntrada(entrada);
            return entrada;
        }

        let esCorreo = function(){
            const entrada = document.createElement('input');
            entrada.type = 'text';
            entrada.pattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/; 
            entrada.title = 'Se debe ingresar un email valido';
            estiloEntrada(entrada);
            return entrada;
        }

        let estiloEntrada = function(elemento){
            //var elemento = document.createElement('input');
            elemento.style.width = '500px';
            elemento.style.border = '2px solid #ccc';
            elemento.style.borderRadius = '15px';
            elemento.style.fontSize = '20px';
            elemento.style.padding = '4px 7px';
            elemento.style.outline = '0';
            elemento.style.borderColor = '#A5A5AF';
        }

        crearEntrada(this.getAttribute("tipo"));
    }

}
window.customElements.define('input-tpi', TextBox);
export default TextBox;