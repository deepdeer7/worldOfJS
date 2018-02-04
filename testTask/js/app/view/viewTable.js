'use strict';

class ViewTable {
	constructor () {
		this.element = document.querySelector('.table');
		this.table = this.initTable();
		this.editingTd = '';
		this.currentTarget = '';
    }

    initTable () {
        return [
            new Table('D0100','D1999', 'Diagnostic', 'Preventive','80','0'),
            new Table('D0100','D1991', 'Diagnostic', 'Preventive','80','0'),
            new Table('D0100','D1992', 'Diagnostic', 'Preventive','80','0'),
            new Table('D0100','D1993', 'Diagnostic', 'Preventive','80','0'),
            new Table('D0100','D1994', 'Diagnostic', 'Preventive','80','0'),
            new Table('D0100','D1995', 'Diagnostic', 'Preventive','80','0'),
            new Table('D0100','D1996', 'Diagnostic', 'Preventive','80','0'),
            new Table('D0100','D1997', 'Diagnostic', 'Preventive','80','0'),
        ];
    }

    showTable () {
        this.element.innerHTML = this.getTemplate();
    }

    getTemplate () {
        let table = 
        	`<table>
  				<tr>
    				<th>Code Range</th>
    				<th>Category</th>
    				<th>Deductible Type</th>
    				<th>Coverage %</th>
    				<th>Co-pay $</th>
  				</tr>`

        this.table.forEach((line) => {
            table += 
            	`<tr> 
            		<td class="code"><span id="firstCode" class="codeEl">${line.codeFrom}</span>-<span id="secondCode" class="codeEl">${line.codeTo}</span></td>
            		<td>${line.category}</td>
            		<td class="type">${line.type}</td>
            		<td class="onlyNumber">${line.coverage}</td>
            		<td class="onlyNumber">${line.pay}</td>
            	</tr>`;
        });

    	table += '</table>'

        return table; 
    } 

    addEventListeners () {
    	this.element.addEventListener('click', (e) => { this.checkClick(e) });
    	this.element.addEventListener('keydown', (e) => { this.checkClickEnter(e) });
    }

    checkNumber (tr) {
    	tr.forEach((el) => {
    		if (el.classList.contains('onlyNumber')) {
    			if(isNaN(el.innerHTML)) {
    				el.innerHTML = 'enter number';
    			}
    		}
    	});
    }

    checkClickEnter (e) {
    	if (this.editingTd && e.keyCode === 13) {
    		this.finishTrEditor(this.editingTd.elem);
    	}
    }

    checkClick (e) {
    	let target = e.target;

    	
    	while (target !== this.element) {
    		if (target.nodeName === 'TR' && this.currentTarget
    			&& target !== this.currentTarget && this.editingTd) {
    			this.finishTrEditor(this.editingTd.elem);

    			return;
    		} else if (target.nodeName === 'TR') {
    			this.currentTarget = target;

    			if (this.editingTd) {
    				return;
    			}

    			this.makeTrEditable(target);
    			return;
    		} 
    		target = target.parentNode;
    	}
   	}

    makeTrEditable (tr) {
    	this.editingTd = {
    		elem: tr.querySelectorAll('td')
    	};

    	let elChanged = tr.querySelectorAll('td');

    	elChanged.forEach((td) => {
    		if (td.classList.contains('type')) {
    			let select = document.createElement('select'),
    				array = ['Basic', 'Orthodontic', 'Preventive'];

    			for (let i = 0; i < array.length; i++) {
    				let option = document.createElement('option');
    				option.text = array[i];
    				select.appendChild(option);
    			}

    			select.value = td.innerHTML;
    			td.innerHTML = '';

    			td.appendChild(select);
    		} else if (td.classList.contains('code')) {
    			let elements = td.querySelectorAll('.codeEl');

    			elements.forEach((el) => {
    				let input = document.createElement('input');

    				input.value = el.innerHTML;
    				el.innerHTML = '';

    				el.appendChild(input);
    			});
    		} else {
    			let input = document.createElement('input');
    			input.style.width = td.clientWidth + 'px';
    			input.style.height = td.clientHeight + 'px';

    			input.value = td.innerHTML;
    			td.innerHTML = '';
    			td.appendChild(input);
    		}
    	});
    }

    finishTrEditor (tr) {
    	tr.forEach((td) => {

    		if (td.classList.contains('code')) {
    			let text = td.querySelectorAll('.codeEl');

    			td.querySelector('#firstCode').innerHTML = text[0].firstChild.value;
    			td.querySelector('#secondCode').innerHTML = text[1].firstChild.value;
    		} else {
    			td.innerHTML = td.firstChild.value;
    		}
    	});

    	this.checkNumber(tr);

    	this.editingTd = null;
    }
}