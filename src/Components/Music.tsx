const Music = () => 
<div className="music">
    <h2>My Music</h2>

    <div id="music">
        <p>Film scoring compositions:</p>
        <audio controls>Your browser does not support audio formats.
            <source src="audio/Spannend bajes 6.wav" />
        </audio> 
        <audio controls>
            <source src="audio/Geavanceerde drum beat met panning + gitaren.wav" />
        </audio>
        <audio controls>
            <source src="audio/Bajes thema 2 V2.wav" />
        </audio>
        <audio controls>
            <source src="audio/Spannend bajes 1 V2.wav" />
        </audio>
        <audio controls>
            <source src="audio/Spannend bajes 2.wav" />
        </audio>
        <p>Rock and Metal compositions:</p>
        <audio controls>
            <source src="audio/Song eindproduct rough mix 1 V2 audacity edit.wav" />
        </audio>
        <p>Classical guitar compositions:</p>
        <audio controls>
            <source src="audio/Anime theme V1.wav" />
        </audio>
    </div>

</div>
export default Music

