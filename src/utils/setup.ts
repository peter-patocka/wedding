import packageJson from '../../package.json';

class Setup {
  configure() {
    this.log();
  }

  log(): void {
    console.log(`Application name: ${packageJson.name}`);
    console.log(`Application version: ${packageJson.version}`);
  }
}

export default new Setup();
