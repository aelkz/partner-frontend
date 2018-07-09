let nextProductId = 1

const products = [
    {"id": nextProductId++, "name": "Samsung - 25.5 Cu. Ft. French Door Refrigerator - Stainless steel", "minAmount": 5, "location": "Raleigh"},
    {"id": nextProductId++, "name": "Bosch - 500 Series 24\" Pocket Handle Dishwasher - Stainless steel", "minAmount": 5, "location": "São Paulo"},
    {"id": nextProductId++, "name": "TCL - 49\" Class - LED - 4 Series - 2160p - Smart - 4K UHD", "minAmount": 5, "location": "Rio de Janeiro"},
    {"id": nextProductId++, "name": "Kit 10 Super Mini Game Eletrônico Portátil Brickgame Antigo", "minAmount": 10, "location": "Fortaleza"},
    {"id": nextProductId++, "name": "Basquete Duplo com Placar Eletrônico Yeladim", "minAmount": 10, "location": "Belém"},
    {"id": nextProductId++, "name": "Smartphone Motorola Moto C Dual SIM 8GB Tela 5 Polegadas XT1750", "minAmount": 20, "location": "Fortaleza"},
    {"id": nextProductId++, "name": "Samsung Galaxy J7 Metal - 16 GB - Preto - GSM", "minAmount": 20, "location": "Berlim"},
    {"id": nextProductId++, "name": "Samsung Galaxy J7 Pro - 64 GB - Azul - GSM", "minAmount": 20, "location": "Montreal"}]

export default {
    getAllProducts(cb) {
        console.log('Reading products...')
        setTimeout(() => cb(products), 100)
    },
    buyProducts(products, cb, errorCb) {
        console.log('Buying products...')
        setTimeout(() => {
            cb()
        }, 100);
    }
}
