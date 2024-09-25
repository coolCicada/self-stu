import { htmlStatement } from './statement.js';
import invoices from './invoices.json';
import plays from './plays.json';
document.body.innerHTML = invoices.map(invoice => htmlStatement(invoice, plays));