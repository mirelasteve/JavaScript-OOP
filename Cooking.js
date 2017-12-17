const n = +gets();
class HashTable {
    constructor(size) {
        let buckets = Array.from({ length: size });
    }
}
const recipe = new HashTable(n);
class HashNode {
    constructor(name, quant, numb) {
        this.name = name;
        this.quant = quant;
        this.numb = numb;
    }
    convertS(arbitQ, arbitN, quant, numb) {
        this.arbitQ = arbitQ;
        this.arbitN = arbitN * 1;
        this.quant = quant;
        this.numb = numb * 1;
        let t;
        if ((arbitQ == 'ls') || (arbitQ == 'liters')) {
            if ((this.quant == 'mls') || (this.quant == 'milliliters')) {

                this.numb = this.numb / 1000;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'ls') || (this.quant == 'liters')) {
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
        }
        if ((arbitQ == 'mls') || (arbitQ == 'milliliters')) {
            if ((this.quant == 'ls') || (this.quant == 'liters')) {
                this.numb = this.numb * 1000;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'mls') || (this.quant == 'milliliters')) {
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'tsps') || (this.quant == 'teaspoons')) {
                this.numb = this.numb * 5;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

        }
        if (arbitQ == 'cups') {
            if (this.quant == 'cups') {
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }

            }
            if ((this.quant == 'fl osz') || (this.quant == 'fluid ounces')) {
                this.numb = this.numb / 8;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'tsps') || (this.quant == 'teaspoons')) {
                this.numb = this.numb / 48;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'pts') || (this.quant == 'pints')) {
                this.numb = this.numb / 2;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
        }
        if ((arbitQ == 'tbsps') || (arbitQ == 'tablespoons')) {
            if ((this.quant == 'tbsps') || (this.quant == 'tablespoons')) {
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'tsps') || (this.quant == 'teaspoons')) {
                this.numb = this.numb * 3;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

        }
        if ((arbitQ == 'tsps') || (arbitQ == 'teaspoons')) {
            if ((this.quant == 'tsps') || (this.quant == 'teaspoons')) {
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'tbsps') || (this.quant == 'tablespoons')) {
                this.numb = this.numb / 3;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if (this.quant == 'cups') {
                this.numb = this.numb * 48;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

        }
        if ((arbitQ == 'fl osz') || (arbitQ == 'fluid ounces')) {
            if (this.quant == 'fluid ounces') {
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

            if (this.quant == 'cups') {
                this.numb = this.numb / 8;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

        }
        if ((arbitQ == 'qts') || (arbitQ == 'quarts')) {
            if ((this.quant == 'qts') || (this.quant == 'quarts')) {
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

            if ((this.quant == 'gals') || (this.quant == 'gallons')) {
                this.numb = this.numb / 4;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'pts') || (this.quant == 'pints')) {
                this.numb = this.numb / 2;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');;
                }
            }

        }
        if ((arbitQ == 'gals') || (arbitQ == 'gallons')) {
            if ((this.quant == 'gals') || (this.quant == 'gallons')) {
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

            if ((this.quant == 'qts') || (this.quant == 'quarts')) {
                this.numb = this.numb * 4;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

        }
        if ((arbitQ == 'pts') || (arbitQ == 'pints')) {
            if ((this.quant == 'pts') || (this.quant == 'pints')) {
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

            if ((this.quant == 'qts') || (this.quant == 'quarts')) {
                this.numb = this.numb / 4;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if (this.quant == 'cups') {
                this.numb = this.numb / 2;
                t = (this.arbitN + this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
        }

    }

    convert(arbitQ, arbitN, quant, numb) {
        this.arbitQ = arbitQ;
        this.arbitN = arbitN * 1;
        this.quant = quant;
        this.numb = numb * 1;
        let t;
        if ((arbitQ == 'ls') || (arbitQ == 'liters')) {
            if ((this.quant == 'mls') || (this.quant == 'milliliters')) {

                this.numb = this.numb / 1000;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'ls') || (this.quant == 'liters')) {
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
        }
        if ((arbitQ == 'mls') || (arbitQ == 'milliliters')) {
            if ((this.quant == 'ls') || (this.quant == 'liters')) {
                this.numb = this.numb * 1000;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'mls') || (this.quant == 'milliliters')) {
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'tsps') || (this.quant == 'teaspoons')) {
                this.numb = this.numb * 5;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

        }
        if (arbitQ == 'cups') {
            if (this.quant == 'cups') {
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }

            }
            if ((this.quant == 'fl osz') || (this.quant == 'fluid ounces')) {
                this.numb = this.numb / 8;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'tsps') || (this.quant == 'teaspoons')) {
                this.numb = this.numb / 48;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'pts') || (this.quant == 'pints')) {
                this.numb = this.numb / 2;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
        }
        if ((arbitQ == 'tbsps') || (arbitQ == 'tablespoons')) {
            if ((this.quant == 'tbsps') || (this.quant == 'tablespoons')) {
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'tsps') || (this.quant == 'teaspoons')) {
                this.numb = this.numb * 3;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

        }
        if ((arbitQ == 'tsps') || (arbitQ == 'teaspoons')) {
            if ((this.quant == 'tsps') || (this.quant == 'teaspoons')) {
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'tbsps') || (this.quant == 'tablespoons')) {
                this.numb = this.numb / 3;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if (this.quant == 'cups') {
                this.numb = this.numb * 48;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

        }
        if ((arbitQ == 'fl osz') || (arbitQ == 'fluid ounces')) {
            if (this.quant == 'fluid ounces') {
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

            if (this.quant == 'cups') {
                this.numb = this.numb / 8;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

        }
        if ((arbitQ == 'qts') || (arbitQ == 'quarts')) {
            if ((this.quant == 'qts') || (this.quant == 'quarts')) {
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

            if ((this.quant == 'gals') || (this.quant == 'gallons')) {
                this.numb = this.numb / 4;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if ((this.quant == 'pts') || (this.quant == 'pints')) {
                this.numb = this.numb / 2;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');;
                }
            }

        }
        if ((arbitQ == 'gals') || (arbitQ == 'gallons')) {
            if ((this.quant == 'gals') || (this.quant == 'gallons')) {
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

            if ((this.quant == 'qts') || (this.quant == 'quarts')) {
                this.numb = this.numb * 4;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

        }
        if ((arbitQ == 'pts') || (arbitQ == 'pints')) {
            if ((this.quant == 'pts') || (this.quant == 'pints')) {
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }

            if ((this.quant == 'qts') || (this.quant == 'quarts')) {
                this.numb = this.numb / 4;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
            if (this.quant == 'cups') {
                this.numb = this.numb / 2;
                t = (this.arbitN - this.numb).toFixed(2);
                if (t > 0) {
                    return (t + ':' + arbitQ + ':');
                }
            }
        }

    }
}

for (let i = 0; i < n; i += 1) {
    let rec = gets().split(':');
    let ingredient = rec[2].toLowerCase();
    if (recipe.hasOwnProperty(ingredient)) {
        let arbQ = recipe[ingredient].quant;
        let usQ = rec[1];
        let arbN = recipe[ingredient].numb;
        let useN = rec[0];
        let con = recipe[ingredient].convertS(arbQ, arbN, usQ, useN);

        print(con + recipe[ingredient].name);
    } else {
        recipe[ingredient] = new HashNode(rec[2], rec[1], rec[0]);
    }
}

const m = +gets();
const used = new HashTable(m);
for (let i = 0; i < m; i += 1) {
    let rec = gets().split(':');
    let ingredient = rec[2].toLowerCase();
    used[ingredient] = new HashNode(rec[2], rec[1], rec[0]);
}

for (let key in recipe) {
    if (used.hasOwnProperty(key)) {
        let arbQ = recipe[key].quant;
        let usQ = used[key].quant;
        let arbN = recipe[key].numb;
        let useN = used[key].numb;

        let result = used[key].convert(arbQ, arbN, usQ, useN);

        if (result) {
            print(result + recipe[key].name);
        }
    }
}
