import { LightningElement, wire } from 'lwc';
import getBudgetSummary from '@salesforce/apex/BudgetSummaryController.getBudgetSummary';

export default class BudgetSummary extends LightningElement {
    budgets;

    @wire(getBudgetSummary)
    wiredBudgets({ error, data }) {
        if (data) {
            this.budgets = data.map(item => {
                let statusClass = 'slds-badge slds-theme_success';

                if (item.Budget_Status__c === 'Warning') {
                    statusClass = 'slds-badge slds-theme_warning';
                } else if (item.Budget_Status__c === 'Over Budget') {
                    statusClass = 'slds-badge slds-theme_error';
                }

                return { ...item, statusClass };
            });
        } else if (error) {
            console.error(error);
        }
    }
}