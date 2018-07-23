package com.example.beastmodewebdevysmolyar.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.beastmodewebdevysmolyar.models.Course;
import com.example.beastmodewebdevysmolyar.models.Module;
import com.example.beastmodewebdevysmolyar.repositories.CourseRepository;
import com.example.beastmodewebdevysmolyar.repositories.ModuleRepository;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;

@RestController
@CrossOrigin(origins = "*")
public class ModuleService {

    @Autowired
    ModuleRepository moduleRepository;
    @Autowired
    CourseRepository courseRepository;
//
//    @PostMapping("/api/course/{cid}/module")
//    public Module createModule(@RequestBody Module module, @PathVariable("cid") int cid) {
//        Optional<Course> maybeCourse = courseRepository.findById(cid);
//        if (maybeCourse.isPresent()) {
//            Course course = maybeCourse.get();
//            List<Module> courseModules = course.getModules();
//            courseModules.add(module);
//            course.setModules(courseModules);
//            module.setCourse(course);
//
//            moduleRepository.save(module);
//            courseRepository.save(course);
//        }
//        return module;
//    }
//
//    @DeleteMapping("/api/course/{cid}/module/{id}")
//    public void deleteModule(@PathVariable("id") int moduleId) {
//        moduleRepository.deleteById(moduleId);
//    }
//
//    @GetMapping("/api/course/{cid}/module/{id}") 
//    public List<Module> findAllModules() {
//        return (List<Module>) moduleRepository.findAll();
//    }
//
//    @GetMapping("/api/module/{id}")
//    public Module findModuleById(@PathVariable("id") int moduleId) {
//        Optional<Module> potentialModule = moduleRepository.findById(moduleId);
//        if (potentialModule.isPresent()) {
//            return potentialModule.get();
//        }
//        return null;
//    }
//
//    @GetMapping("/api/course/{cid}/module")
//    public List<Module> findAllModulesForCourse(@PathVariable("cid") int courseId) {
//        Optional<Course> potentialCourse = courseRepository.findCourseById(courseId);
//        if (potentialCourse.isPresent()) {
//            Course course = potentialCourse.get();
//            return course.getModules();
//        }
//        return null;
//    }
//
//    @PutMapping("/api/module/{id}")
//    public Module updateModule(@RequestBody Module newModule, @PathVariable("id") int moduleId) {
//        Optional<Module> potentialModule = moduleRepository.findById(moduleId);
//        if (potentialModule.isPresent()) {
//            Module module = potentialModule.get();
//            module.setTitle(newModule.getTitle());
//            module.setCourse(newModule.getCourse());
//
//            moduleRepository.save(module);
//            return module;
//        }
//        return null;
//    }
}
