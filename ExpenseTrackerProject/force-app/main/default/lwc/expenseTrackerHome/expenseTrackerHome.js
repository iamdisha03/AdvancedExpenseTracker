import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import expenseBackground from '@salesforce/resourceUrl/expenseBackground';

export default class ExpenseTrackerHome extends NavigationMixin(LightningElement) {

    get heroStyle() {
        return `
            background-image:url(${expenseBackground});
            background-size:cover;
            background-position:center;
            background-repeat:no-repeat;
        `;
    }

    navigateToExpenses() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Expense__c',
                actionName: 'list'
            }
        });
    }

    navigateToBudgets() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Budget__c',
                actionName: 'list'
            }
        });
    }

    navigateToReports() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Reports'
            }
        });
    }

    navigateToDashboards() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Dashboards'
            }
        });
    }

    navigateToHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Salesforce_Automation'
            }
        });
    }

    navigateToEmail() {
        window.open(
            'mailto:dishabalasubramani75@gmail.com?subject=Expense Tracker Alert',
            '_blank'
        );
    }
}