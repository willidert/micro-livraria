const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('proto/inventory.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const InventoryService = grpc.loadPackageDefinition(packageDefinition).InventoryService;
const client = new InventoryService('inventory:3002', grpc.credentials.createInsecure());

module.exports = client;
