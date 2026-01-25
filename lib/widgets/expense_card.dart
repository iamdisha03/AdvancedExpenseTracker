import 'package:flutter/material.dart';
import '../models/transaction.dart';
import 'transaction_tile.dart';

class ExpenseCard extends StatelessWidget {
  final Transaction transaction;

  const ExpenseCard({super.key, required this.transaction});

  @override
  Widget build(BuildContext context) {
    return TransactionTile(transaction: transaction);
  }
}