document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const orderItems = document.getElementById('orderItems');
    let orders = [];

    if (localStorage.getItem('orders')) {
        orders = JSON.parse(localStorage.getItem('orders'));
        displayOrders();
    }

    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const selectedModel = document.querySelector('input[name="model"]:checked');
        const nivelEchipare = document.getElementById('informati').value;
        const email = document.getElementById('email').value;

        if (selectedModel && nivelEchipare && email) {
            const order = {
                model: selectedModel.value,
                nivelEchipare: nivelEchipare,
                email: email
            };

            orders.push(order);
            saveOrders();

            const orderItem = document.createElement('li');
            orderItem.innerHTML = `
                    Model: ${order.model} | Nivel de echipare: ${order.nivelEchipare} | Email: ${order.email}
                    <button class="removeOrder">Remove</button>
            `;
            orderItems.appendChild(orderItem);

            selectedModel.checked = false;
            document.getElementById('informati').value = '';
            document.getElementById('email').value = '';

            orderItem.querySelector('.removeOrder').addEventListener('click', function() {
                const index = orders.findIndex(item => item.email === order.email);
                if (index > -1) {
                    orders.splice(index, 1);
                    saveOrders();
                }
                orderItems.removeChild(orderItem);
            });
        }
    });

    function saveOrders() {
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    function displayOrders() {
        orderItems.innerHTML = '';
        for (let i = 0; i < orders.length; i++) {
            const order = orders[i];
            const orderItem = document.createElement('li');
            orderItem.innerHTML = `
                Model: ${order.model} | Nivel de echipare: ${order.nivelEchipare} | Email: ${order.email}
                <button class="removeOrder">Remove</button>
            `;
            orderItems.appendChild(orderItem);

            orderItem.querySelector('.removeOrder').addEventListener('click', function() {
                const index = orders.findIndex(item => item.email === order.email);
                if (index > -1) {
                    orders.splice(index, 1);
                    saveOrders();
                }
                orderItems.removeChild(orderItem);
            });
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'y') {
            window.location.href = 'https://suzuki.ro/autoturisme/';
        }
    });
});