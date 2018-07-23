package com.example.beastmodewebdevysmolyar.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.beastmodewebdevysmolyar.models.Course;
import com.example.beastmodewebdevysmolyar.repositories.CourseRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class CourseService {

    @Autowired
    CourseRepository courseRepository;

    @PostMapping("/api/course")
    public Course createCourse(@RequestBody Course course) {
        Date date = new Date();
        course.setCreated(date);
        course.setModified(date);
        courseRepository.save(course);
        return course;
    }

    @DeleteMapping("/api/course/{id}")
    public void deleteCourse(@PathVariable("id") int courseId) {
        courseRepository.deleteById(courseId);
    }

    @GetMapping("/api/course")
    public List<Course> findAllCourses() {
        return (List<Course>) courseRepository.findAll();
    }

    @GetMapping("/api/course/{id}")
    public Course findCourseById(@PathVariable("id") int courseId) {
        Optional<Course> possibleCourse = courseRepository.findById(courseId);
        if (possibleCourse.isPresent()) {
            return possibleCourse.get();
        }
        return null;
    }

    @PutMapping("/api/course/{id}")
    public Course updateCourse(@RequestBody Course newCourse, @PathVariable("id") int courseId) {
        Optional<Course> potentialCourse = courseRepository.findById(courseId);
        if (potentialCourse.isPresent()) {
            Course course = potentialCourse.get();
            course.setTitle(newCourse.getTitle());

            Date date = new Date();
            course.setModified(date);
            courseRepository.save(course);
            return course;
        }
        return null;
    }
}