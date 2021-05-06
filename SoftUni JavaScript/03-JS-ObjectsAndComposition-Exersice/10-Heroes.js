function solve() {
    const canCast = (state) => ({
        cast: (spell) => {
            state.mana -= 1;
            console.log(`${state.name} cast ${spell}`);
        }
    });

    const canFight = (state) => ({
        fight: () => {
            state.stamina -= 1;
            console.log(`${state.name} slashes ar the foe!`);
        }
    })

    const mage = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100
        }

        return Object.assign(state, canCast(state));
    }

    const fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100
        }

        return Object.assign(state, canFight(state));
    }

    return { mage: mage, fighter: fighter };
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
