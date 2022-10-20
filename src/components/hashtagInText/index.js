function hashtagInText (text) {

  let splitText = text.split(' ')
  let hashtagListFinded = splitText.filter(word => word.includes('#'))

  const Component = (<p>
    {
      splitText.map((element) => {
        let rt = hashtagListFinded.map((hashtag, index) => {
          if(element === hashtag) {
            return (<span value={index}> {hashtag} </span>)
          }
          return undefined;
        })
        rt = rt.filter(el => {
          if(el) return el
          return undefined;
        })
        if(!rt[0]) {
          return <> {element} </>
        }else{
          return rt[0]
        } 
      })
    }
  </p>)

  return Component;
}

export default hashtagInText;