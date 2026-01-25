import 'package:flutter/material.dart';
import '../models/transaction.dart';
import '../utils/category_helper.dart';

class AddExpenseScreen extends StatefulWidget {
  final Function(Transaction) onAdd;

  const AddExpenseScreen({super.key, required this.onAdd});

  @override
  State<AddExpenseScreen> createState() => _AddExpenseScreenState();
}

class _AddExpenseScreenState extends State<AddExpenseScreen> {
  final _titleController = TextEditingController();
  final _amountController = TextEditingController();

  void submit() {
    if (_titleController.text.isEmpty ||
        _amountController.text.isEmpty) {
      return;
    }

    final transaction = Transaction(
      id: DateTime.now().toString(),
      title: _titleController.text,
      amount: double.parse(_amountController.text),
      date: DateTime.now(),
      category: detectCategory(_titleController.text),
    );

    widget.onAdd(transaction);
    Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Add Expense')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(
              controller: _titleController,
              decoration: const InputDecoration(labelText: 'Title'),
            ),
            TextField(
              controller: _amountController,
              decoration: const InputDecoration(labelText: 'Amount'),
              keyboardType: TextInputType.number,
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: submit,
              child: const Text('Add Expense'),
            ),
          ],
        ),
      ),
    );
  }
}
