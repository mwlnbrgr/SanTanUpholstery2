using PracticeStuff.Models;
using PracticeStuff.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeStuff.Services
{
    public class ImageService : IImageService
    {         
        private IGenericRepo _repo;
        public ImageService(IGenericRepo repo)
        {
            _repo = repo;
        }
       
        public List<Image> GetAllImages()
        {
            return _repo.Query<Image>().ToList();
        }
       
        public Image getImage(int id)
        {
            var image = _repo.Query<Image>().Where(i => i.Id == id).FirstOrDefault();
            return image;
        }
       
        public void AddImage(Image image)
        {
            if (image.Id == 0)
            {
                _repo.Add(image);
            }
            else
            {
                _repo.Update(image);
            }
        }

       
        public void DeleteImage(int id)
        {
            var image = _repo.Query<Image>().Where(p => p.Id == id).FirstOrDefault();
            _repo.Delete(image);


        }

    }
}

