package com.example.beastmodewebdevysmolyar.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.beastmodewebdevysmolyar.models.Lesson;
import com.example.beastmodewebdevysmolyar.models.Module;
import com.example.beastmodewebdevysmolyar.repositories.LessonRepository;
import com.example.beastmodewebdevysmolyar.repositories.ModuleRepository;


@RestController
@CrossOrigin(origins = "*")
public class LessonService {

    @Autowired
    ModuleRepository moduleRepository;
    @Autowired
    LessonRepository lessonRepository;

    @PostMapping("/api/course/{cid}/module")
    public Lesson createLesson(@RequestBody Lesson lesson, @PathVariable("mid") int mid) {
        Optional<Module> maybeModule = moduleRepository.findById(mid);
        if (maybeModule != null) {
            Module module = maybeModule.get();
            List<Lesson> moduleLessons = module.getLessons();
            moduleLessons.add(lesson);
            module.setLessons(moduleLessons);  
            lesson.setModule(module);

            moduleRepository.save(module);
            lessonRepository.save(lesson);
        }
        return lesson;
    }

    @DeleteMapping("/api/lesson/{id}")
    public void deleteLesson(@PathVariable("id") int lessonId) {
        lessonRepository.deleteById(lessonId);
    }

    @GetMapping("/api/lesson") 
    public List<Lesson> findAllLessons() {
        return (List<Lesson>) lessonRepository.findAll();
    }

    @GetMapping("/api/lesson/{id}")
    public Lesson findLessonById(@PathVariable("id") int lessonId) {
        Optional<Lesson> potentialLesson = lessonRepository.findById(lessonId);
        if (potentialLesson != null) {
            return potentialLesson.get();
        }
        return null;
    }

    @GetMapping("/api/course/{cid}/module/{mid}/lesson")
    public List<Lesson> findAllLessonsForModule(@PathVariable("mid") int moduleId) {
        Optional<Module> potentialModule = moduleRepository.findById(moduleId);
        if (potentialModule != null) {
            Module module = potentialModule.get();
            return module.getLessons();
        }
        return null;
    }

    @PutMapping("/api/lesson/{id}")
    public Lesson updateLesson(@RequestBody Lesson newLesson, @PathVariable("id") int lessonId) {
        Optional<Lesson> potentialLesson = lessonRepository.findById(lessonId);
        if (potentialLesson != null ) {
            Lesson lesson = potentialLesson.get();
            lesson.setTitle(lesson.getTitle());
            lesson.setModule(lesson.getModule());

            lessonRepository.save(lesson);
            return lesson;
        }
        return null;
    }
}
