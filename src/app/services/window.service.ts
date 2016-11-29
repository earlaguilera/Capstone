export class WindowService {
  private alpha: number = 0.3;
  private timeIncrement: number = 10;
  private totalTime: number = 200;

  public showBackdrop(): void {
    document.getElementById('backdrop').style.display = 'block';
    for (let step = 0; step <= this.totalTime; step += this.timeIncrement) {
      setTimeout(() => {
        const ratio = step / this.totalTime;
        document.getElementById('backdrop').style.background = 'rgba(0,0,0, ' + this.alpha * ratio + ')';
      }, step);
    }
  }

  public hideBackdrop(): void {
    for (let step = 0; step < this.totalTime; step += this.timeIncrement) {
      setTimeout(() => {
        const ratio = 1 - (step / this.totalTime);
        document.getElementById('backdrop').style.background = 'rgba(0,0,0, ' + this.alpha * ratio + ')';
      }, step);
    }
    setTimeout(() => {
      document.getElementById('backdrop').style.display = 'none';
    }, this.totalTime);
  }
}
