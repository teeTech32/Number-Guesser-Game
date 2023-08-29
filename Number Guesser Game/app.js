let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#input-guess'),
      guessBtn = document.querySelector('#btn-guess'),
      message = document.querySelector('.message'),
      text = document.querySelector('.text'),
      game = document.querySelector('#game');

      minNum.textContent = min;
      maxNum.textContent = max;

      game.addEventListener('mousedown', function(e){
        if(e.target.className==='play-again'){
          window.location.reload()
        }
      })

      guessBtn.addEventListener('click', function(e){
          let guess = parseInt(guessInput.value);
          if(isNaN(guess) || guess < min || guess > max){
            setTimeout(setMessage, 5000)
            setTimeout(setText, 5000)
            setText(`Please enter number between ${min} and ${max} !`, 'red');
          }

          if(guess===winningNum){
           gameOver(true, `${winningNum} is correct, YOU WIN!`)
            
          }else{
            guessesLeft -= 1;
            if(guessesLeft === 0){
              gameOver(false, `Game Over, the correct answer was  ${winningNum}`)
        
            }else{
              setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
              guessInput.style.borderColor = 'red'
              guessInput.style.color = 'red'
              
            }
            
          }
          e.preventDefault(e)

        }
        )

        function getRandomNum(min, max){
          return ( Math.floor(Math.random()*(max-min+1)+min))
        }

        function gameOver(won, msg){
          let color;

          won === true ? color = 'green' : color = 'red'
          guessInput.disabled = true;
          guessInput.style.borderColor = color
          guessInput.style.color = color
          message.style.color = color
    
          setMessage(msg)

          guessBtn.value = 'Play again'
          guessBtn.className = 'play-again'
        }

        function setText(msg, color){
          text.textContent = msg;
          text.style.color = color;
        }

       function setMessage(msg, color){
        message.textContent = msg;
        message.style.color = color
       }
       



      