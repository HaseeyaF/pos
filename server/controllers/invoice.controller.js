const { Invoice, InvoiceItem, Product, Customer } = require("../models");

exports.createInvoice = async (req, res) => {
  const { customerId, items, total, tax, discount, paymentMethod } = req.body;

  try {
    const invoice = await Invoice.create({
      customerId,
      total,
      tax,
      discount,
      paymentMethod,
      invoiceNumber: `INV-${Date.now()}`,
    });

    for (const item of items) {
      await InvoiceItem.create({
        invoiceId: invoice.id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      });

      // reduce stock
      await Product.increment(
        { quantity: -item.quantity },
        { where: { id: item.productId } }
      );
    }

    res.status(201).json(invoice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.findAll({
      include: [
        { model: Customer },
        {
          model: InvoiceItem,
          include: [Product],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
