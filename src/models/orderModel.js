const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
    {
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                },
                count: Number,
                color: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Color',
                    },
                ],
                price: Number,
            },
        ],
        paymentIntent: {},
        orderStatus: {
            type: String,
            default: 'Chưa xử lý',
            enum: ['Chưa xủ lý', 'Thanh toán khi giao hàng', 'Đang xử lý', 'Đang vận chuyển', 'Hủy', 'Đã giao hàng'],
        },
        orderBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    },
);

//Export the model
module.exports = mongoose.model('Order', orderSchema);
