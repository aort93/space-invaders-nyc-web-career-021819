class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';

    if(crew.length) {
      this.docked = false;
    } else {
      this.docked = true;
    }

    this.addToCrew();
  }

  addToCrew() {
    this.crew.forEach( crewMember => ( crewMember.currentShip = this ) );
  }

}
