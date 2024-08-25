import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

interface VideoInfo {
	imageLink: string;
	titleVideo: string;
	channelName: string;
	likes: BigInt;
	comments: BigInt;
	views: BigInt;
}

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [
	FormsModule,
	CommonModule
  ],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.scss'
})

export class YoutubeComponent {
	videoLink = "";
	videoImageLink: String | null = null;
	videoTitle: String | null = null;
	videoChannelName: String | null = null;
	likes: BigInt | null = null;
	comments: BigInt | null = null;
	views: BigInt | null = null;
	linkIsNotValid: Boolean | null = null;
	isDownloading: Boolean | null = null; 

	constructor(private http: HttpClient){

	}

	isYouTubeLink(url: string): boolean {
		const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
		return regex.test(url);
	}

	getVideoIDFromURL(linkVideo: string){
		if (this.isYouTubeLink(linkVideo)) {
			const parts = linkVideo.split("watch?v=")
			return parts[1]	
		}
		this.linkIsNotValid = true 
		return false
	}

	getVideoInfos(linkVideo: string){
		const videoID = this.getVideoIDFromURL(linkVideo);
		if (videoID !== false) {
			this.http.get<VideoInfo>(`https://downloadervideos-production.up.railway.app/video/infoVideo/${videoID}`).subscribe(response => {
				this.videoImageLink = response['imageLink'];
				this.videoTitle = response['titleVideo'];
				this.videoChannelName = response['channelName'];
				this.views = response['views'];
				this.comments = response['comments'];
				this.likes = response['likes']
			})
		}
	}

	downloadFullVideo(linkVideo: string) {
		const videoID = this.getVideoIDFromURL(linkVideo);
		if (videoID !== false) {
			this.isDownloading = true
			this.http.get(`https://downloadervideos-production.up.railway.app/video/downloadVideoFull/${videoID}`, { responseType: 'blob' })
			.subscribe((blob: Blob) => {
			  // Criando uma URL para o blob
			  const downloadUrl = window.URL.createObjectURL(blob);
			  const link = document.createElement('a');
			  link.href = downloadUrl;
			  link.download = `${videoID}.mp4`; // Definindo o nome do arquivo para download
			  link.click(); // Iniciando o download
			  window.URL.revokeObjectURL(downloadUrl); // Limpando a URL criada
			  this.isDownloading = null;
			});
		}
	}

	downloadOnlyVideo(linkVideo: string) {
		const videoID = this.getVideoIDFromURL(linkVideo);
		if (videoID !== false) {
			this.isDownloading = true
			this.http.get(`https://downloadervideos-production.up.railway.app/video/downloadOnlyVideo/${videoID}`, { responseType: 'blob' })
			.subscribe((blob: Blob) => {
			  // Criando uma URL para o blob
			  const downloadUrl = window.URL.createObjectURL(blob);
			  const link = document.createElement('a');
			  link.href = downloadUrl;
			  link.download = `${videoID}.mp4`; // Definindo o nome do arquivo para download
			  link.click(); // Iniciando o download
			  window.URL.revokeObjectURL(downloadUrl); // Limpando a URL criada
			  this.isDownloading = null;
			});
		}
	}

	
	downloadOnlyAudio(linkVideo: string) {
		const videoID = this.getVideoIDFromURL(linkVideo);
		if (videoID !== false) {
			this.isDownloading = true
			this.http.get(`https://downloadervideos-production.up.railway.app/video/downloadOnlyAudio/${videoID}`, { responseType: 'blob' })
			.subscribe((blob: Blob) => {
			  // Criando uma URL para o blob
			  const downloadUrl = window.URL.createObjectURL(blob);
			  const link = document.createElement('a');
			  link.href = downloadUrl;
			  link.download = `${videoID}.mp4`; // Definindo o nome do arquivo para download
			  link.click(); // Iniciando o download
			  window.URL.revokeObjectURL(downloadUrl); // Limpando a URL criada
			  this.isDownloading = null;
			});
		}
	}
}
