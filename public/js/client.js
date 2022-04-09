 window.onload = () => {
    
    const socket = io();


    socket.on('messages', data => {
        if(data){
          loadMessages(data)
        } else{
            alert("base de chat no esta levantada")
        }
        });

    socket.on('products', listproducts => {
        if(listproducts){
            loadProds(listproducts)
        } else{
            alert("base de productos no esta levantada")
        }
       });

    //---------------------funciones ---------------------

    async function loadProds(listproducts) {
        let htmlProd = ""
        const tableList = await fetch('views/partials/table.ejs').then(res => res.text())
 
        if (listproducts.length === 0){
            htmlProd = `No se encontraron Productos`
        }else{
            htmlProd = ejs.render(tableList, {listproducts})
     
        }
         document.getElementById('NuevaTabla').innerHTML = htmlProd;
         
    }

    function loadMessages(data) {
        const html = data.map((elem, index) => {
            return(`<div class="direct-chat-info clearfix">
                         <span id="chatName" class="direct-chat-name pull-right">${elem.email}</span> 
                        <span id= "chatDate" class="direct-chat-timestamp pull-left">${elem.date}</span> 
                    </div>
                         <div id="chatText" class="direct-chat-text">${elem.text}</div> 
                     `)
        }).join(" ");
        document.getElementById('messages').innerHTML = html;
    }
    
    function addMessage() {
        
        const newMessage = {
            email: document.getElementById('email').value,
            text: document.getElementById('text').value,
            };

        socket.emit('new-message', newMessage);
    }
    
    document.getElementById('frmPasion').addEventListener('submit', (e) => {
        e.preventDefault()
        addMessage()
    })
    
    document.getElementById('btn').addEventListener('click', () => {

        const newprod = {
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        url: document.getElementById('url').value
        }
        socket.emit('newProd', newprod)
        })


}

    
 


