interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playerButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocols {
  playTogle(): void;
  startEvents(): void;
}

class VideoPlayer implements VideoPlayerProtocols {
  private videoPlayer: HTMLVideoElement;
  private playerButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playerButton = videoPlayerElements.playerButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  startEvents(): void {
    this.playerButton.addEventListener('click', () => {
      this.playTogle();
    });

    this.stopButton.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playerButton.innerText = 'Play';
    });
  }

  playTogle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playerButton.innerText = 'Paused';
    } else {
      this.videoPlayer.pause();
      this.playerButton.innerText = 'Play';
    }
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playerButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});

videoPlayer.startEvents();
