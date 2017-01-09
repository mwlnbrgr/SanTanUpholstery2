using System.Collections.Generic;
using PracticeStuff.Models;

namespace PracticeStuff.Services
{
    public interface IImageService
    {
        void AddImage(Image image);
        void DeleteImage(int id);
        List<Image> GetAllImages();
        Image getImage(int id);
    }
}