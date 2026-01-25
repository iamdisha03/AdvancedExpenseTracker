import 'package:flutter/material.dart';
import '../models/transaction.dart';
import '../widgets/monthly_chart.dart';

class ChartScreen extends StatelessWidget {
  final List<Transaction> transactions;

  const ChartScreen(this.transactions, {super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Monthly Report')),
      body: MonthlyChart(transactions),
    );
  }
}
