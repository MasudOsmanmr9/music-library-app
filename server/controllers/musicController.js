const Music = require("../models/musicModel")

exports.trackSearch = async (req,res) => {

    const query = req.query.track;

    try { 
        const results = await Music.find({ $or: [{ title: new RegExp(query, 'i') }, { artist: new RegExp(query, 'i') }] });
        res.status(200).json({
            status:"success",
            data:{
                tracks: results
            }
        });
    }catch(e){
        console.log(e);
        res.status(400).json({
            status:"failsssssssssss",
        })
    }
}


exports.createMusic = async (req, res) => {
    const { title, artist, url } = req.body;
  
    try {
      const newMusic = new Music({ title, artist, url });
      await newMusic.save();
      res.status(201).json({
        status:"success",
        data:{
            music: newMusic
        }
    });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

exports.getMusics = async (req, res) => {
  try {
    const allMusic = await Music.find();
    res.status(200).json({
        status:"success",
        data:{
            musics: allMusic
        }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getMusic = async (req, res) => {
    const { id } = req.params;
    try {
      const music = await Post.findById(id);
  
      res.status(200).json({
        status: "succes",
  
        data: {
          music,
        },
      });
    } catch (e) {
      res.status(400).json({
        status: "fail",
      });
    }
  };

exports.updateMusic = async (req, res) => {
    const { id } = req.params;
    const { title, artist, url } = req.body;
  
    try {
      const updatedMusic = await Music.findByIdAndUpdate(id, { title, artist, url }, { new: true });
      res.json(updatedMusic);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
};

exports.deleteMusic = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedMusic = await Music.findByIdAndDelete(id);
      res.json(deletedMusic);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };