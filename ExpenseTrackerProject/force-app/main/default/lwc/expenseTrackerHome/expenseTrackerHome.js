import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getDashboardData from '@salesforce/apex/ExpenseDashboardController.getDashboardData';

export default class ExpenseTrackerHome extends NavigationMixin(LightningElement) {

    //=====================================================
    // DASHBOARD DATA
    //=====================================================

    dashboard = {
        totalBudget: 0,
        totalExpense: 0,
        remainingAmount: 0,
        usedPercentage: 0,
        totalTransactions: 0
    };

    recentExpenses = [];

    error;

    //=====================================================
    // DATATABLE COLUMNS
    //=====================================================

    columns = [

        {
            label: 'Expense',
            fieldName: 'Name',
            type: 'text'
        },

        {
            label: 'Category',
            fieldName: 'Category__c',
            type: 'text'
        },

        {
            label: 'Amount',
            fieldName: 'Amount__c',
            type: 'currency',
            typeAttributes: {
                currencyCode: 'INR'
            }
        },

        {
            label: 'Date',
            fieldName: 'Expense_Date__c',
            type: 'date'
        },

        {
            label: 'Payment',
            fieldName: 'Payment_Method__c',
            type: 'text'
        },

        {
            label: 'Status',
            fieldName: 'Status__c',
            type: 'text'
        }

    ];

    //=====================================================
    // LOAD DASHBOARD DATA
    //=====================================================

    @wire(getDashboardData)
    wiredDashboard({ data, error }) {

        if (data) {

            this.dashboard = {

                totalBudget: data.totalBudget || 0,
                totalExpense: data.totalExpense || 0,
                remainingAmount: data.remainingAmount || 0,
                usedPercentage: Math.round(data.usedPercentage || 0),
                totalTransactions: data.totalTransactions || 0

            };

            this.recentExpenses = data.recentExpenses || [];

            this.error = undefined;

        }

        else if (error) {

            this.error = error;

            console.error('Dashboard Error', error);

        }

    }

    //=====================================================
    // NAVIGATION
    //=====================================================

    navigateToExpense() {

        this[NavigationMixin.Navigate]({

            type: 'standard__objectPage',

            attributes: {

                objectApiName: 'Expense__c',

                actionName: 'home'

            }

        });

    }

    navigateToBudget() {

        this[NavigationMixin.Navigate]({

            type: 'standard__objectPage',

            attributes: {

                objectApiName: 'Budget__c',

                actionName: 'home'

            }

        });

    }

    //=====================================================
    // REPORTS
    //=====================================================

    navigateToReports() {

        this[NavigationMixin.Navigate]({

            type: 'standard__webPage',

            attributes: {

                url: '/lightning/r/Report/00OWU00000MneR32AJ/view?queryScope=userFolders'

            }

        });

    }

    //=====================================================
    // DASHBOARD
    //=====================================================

    navigateToDashboard() {

        this[NavigationMixin.Navigate]({

            type: 'standard__webPage',

            attributes: {

                url: '/lightning/r/Dashboard/01ZWU000006clC92AI/view?queryScope=userFolders'

            }

        });

    }

    //=====================================================
    // COMPONENT LOADED
    //=====================================================

    connectedCallback() {

        console.log('Expense Tracker Home Loaded');

    }

}