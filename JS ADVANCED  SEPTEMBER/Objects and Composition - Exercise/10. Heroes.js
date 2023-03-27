function solve(){

    let funcObject = {

        mage(stringName){

            let mage = {
                'name': stringName,
                'health': 100,
                'mana': 100,
                cast(spell){
    
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            }
            
            return mage;
        },

        fighter (stringName){
           
           let fighter = {
            'name': stringName,
            'health': 100,
            'stamina': 100,
            fight(){
                console.log(`${this.name} slashes at the foe!`);
                this.stamina--;
            }
           }
           
            return fighter;        
    
        }



    }
    
    return funcObject;

   
    
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
