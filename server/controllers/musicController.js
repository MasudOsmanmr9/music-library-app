const Music = require("../models/musicModel")

exports.trackSearch = async (req,res) => {

    const query = req.query.track;

    try { 
        const tracks = await Music.find({ $or: [{ title: new RegExp(query, 'i') }, { artist: new RegExp(query, 'i') }] });
        res.status(200).json({
            status:"success",
            tracks
        });
    }catch(e){
        console.log(e);
        res.status(400).json({
            status:"fail",
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
      const music = await Music.findById(id);
  
      res.status(200).json({
        status: "succes",
        music
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
      res.status(200).json({
        status: "succes",
        updatedMusic
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
};

exports.deleteMusic = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedMusic = await Music.findByIdAndDelete(id);
      res.status(200).json({
        status: "succes",
        deletedMusic
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };