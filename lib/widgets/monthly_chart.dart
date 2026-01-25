import 'package:flutter/material.dart';
import '../models/transaction.dart';

class MonthlyChart extends StatelessWidget {
  final List<Transaction> transactions;

  const MonthlyChart(this.transactions, {super.key});

  @override
  Widget build(BuildContext context) {
    double total = 0;

    for (var tx in transactions) {
      total += tx.amount;
    }

    return Card(
      margin: const EdgeInsets.all(16),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            const Text(
              'Total Expense This Month',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
            Text(
              '₹${total.toStringAsFixed(2)}',
              style: const TextStyle(fontSize: 22, color: Colors.red),
            ),
          ],
        ),
      ),
    );
  }
}
