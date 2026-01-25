import '../models/transaction.dart';

Category detectCategory(String title) {
  final text = title.toLowerCase();

  if (text.contains('pizza') ||
      text.contains('burger') ||
      text.contains('food') ||
      text.contains('coffee')) {
    return Category.food;
  }

  if (text.contains('petrol') ||
      text.contains('diesel') ||
      text.contains('bus') ||
      text.contains('uber')) {
    return Category.transport;
  }

  if (text.contains('movie') ||
      text.contains('netflix') ||
      text.contains('game')) {
    return Category.entertainment;
  }

  if (text.contains('college') ||
      text.contains('course') ||
      text.contains('book') ||
      text.contains('tuition')) {
    return Category.education;
  }

  if (text.contains('shopping') ||
      text.contains('dress') ||
      text.contains('amazon')) {
    return Category.shopping;
  }

  if (text.contains('electricity') ||
      text.contains('water') ||
      text.contains('rent')) {
    return Category.bills;
  }

  return Category.others;
}
