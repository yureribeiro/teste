function sendSpaceship(name, captain) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        isMission: true,
        crew: []
    };
    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi em uma missao.`);
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`);
    }
    else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`);
    }
    else {
        alert(`Mantendo a velocidade da ${spaceship.name}...`);
    }
}
const spaceshipName = prompt('Insira o nome da nave a ser enviada.');
const spaceshipCaptian = prompt('Insira o nome do capitão da nave');
const nameShip = spaceshipName !== null && spaceshipName !== void 0 ? spaceshipName : 'Nave sem nome';
const captain = spaceshipCaptian !== null && spaceshipCaptian !== void 0 ? spaceshipCaptian : 'Capitão desconhecido';
const currentShip = sendSpaceship(nameShip, captain);
const speed = Number(prompt('Insira a velocidade para a qual deseja acelerar'));
accelerate(speed, currentShip);
