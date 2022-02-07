package com.ssafy.pollar.model.service;

import com.ssafy.pollar.domain.entity.Category;
import com.ssafy.pollar.domain.entity.User;
import com.ssafy.pollar.domain.entity.UserCategory;
import com.ssafy.pollar.model.dto.UserDto;
import com.ssafy.pollar.model.repository.CategoryRepository;
import com.ssafy.pollar.model.repository.UserRepository;
import com.ssafy.pollar.model.repository.UserCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.http.fileupload.FileUpload;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.transaction.annotation.Transactional;


import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final UserCategoryRepository userCategoryRepository;
    private final CategoryRepository categoryRepository;

//    @Value("${custom.path.upload-images}")
//    @Value("${file.path}")
//    private String uploadFolder;

    @Override
    public void signup(UserDto userDto) throws Exception {

        User user = User.builder()
//                .uid(userDto.getUid())
                .userId(userDto.getUserId())
                .password(userDto.getPassword())
                .userNickname(userDto.getUserNickname())
                .userEmail(userDto.getUserEmail())
                .userBirthday(userDto.getUserBirthday())
                .userSex(userDto.getUserSex())
                .build();
        // User에 user 정보 저장
        userRepository.save(user);

        // User가 선택한 카테고리별 Id를 찾아서 User Id와 함께 UserCategory에 추가
       for (long categoryId : userDto.getCategories()){
            Category category = categoryRepository.findById(categoryId).get();
            userCategoryRepository.save(UserCategory.builder()
                    .userCategory(user)
                    .category(category)
                    .build());
        }
    }

    @Override
    public boolean idCheck(String userId) throws Exception {
        if(userRepository.findByUserId(userId).isPresent()){//아이디가 있는경우
            return false;
        }else{//아이디가 없는경우
            return true;
        }
    }

    @Override
    public boolean nicknameCheck(String userNickname) throws Exception {
        if(userRepository.findByUserNickname(userNickname).isPresent()){//아이디가 있는경우
            return false;
        }else{//닉네임이 없는경우
            return true;
        }
    }

    @Override
    public boolean emailCheck(String userEmail) throws Exception {
        if(userRepository.findByUserEmail(userEmail).isPresent()){//아이디가 있는경우
            return false;
        }else{//이메일이 없는경우
            return true;
        }
    }

    //회원정보 수정
    @Override
    public void modifyUserInfo(UserDto userDto) throws Exception{
        User usercur = userRepository.findByUserId(userDto.getUserId()).get();

        User user = User.builder()
                .uid(usercur.getUid())
                .userId(usercur.getUserId())
                .password(usercur.getPassword())
                .userNickname((userDto.getUserNickname()))
                .userEmail((userDto.getUserEmail()))
                .userBirthday((userDto.getUserBirthday()))
                .userSex((userDto.getUserSex()))
                .userProfilePhoto(userDto.getUserProfilePhoto())
                .build();

        // User에 user 정보 저장
        userRepository.save(user);
    }

    @Override
    public void deleteUserInfo(String userId) throws Exception {
        Optional<User> user = userRepository.findByUserId(userId);

        userRepository.delete(user.get());
    }

    @Override
    public boolean login(UserDto userDto) throws Exception {
        if(userDto.getUserId() == null || userDto.getPassword()==null){
            return false;
        }else{
            if(!userRepository.findByUserIdAndPassword(userDto.getUserId(),userDto.getPassword()).isPresent()){
                return false;
            }else{
                return true;
            }
        }

    }

    @Override
    public void modifyProfile(UserDto userDto, MultipartFile userProfilePhoto) throws Exception {
        UUID uuid = UUID.randomUUID();
        System.out.println("-----------------------------------");
        System.out.println(userProfilePhoto.getResource());
        System.out.println(userProfilePhoto.getOriginalFilename());
        System.out.println(userProfilePhoto.getInputStream());
        System.out.println(userProfilePhoto.getBytes());

        String imageFileName = "123.jpeg";
        System.out.println("-----------------------------------");
        System.out.println("이미지 파일 이름: " + imageFileName);
        System.out.println("-----------------------------------");
//        System.out.println("저장할 경로: " + uploadFolder);
//        Path currentPath = Paths.get("");
//        String path = currentPath.toAbsolutePath().toString();
//        System.out.println("현재 작업 경로: " + path);

//        Path filePath = Paths.get(imageFileName);

//        File fi = new File(imageFileName);
//        final BufferedWriter out = Files.newBufferedWriter(filePath, StandardCharsets.UTF_8, StandardOpenOption.APPEND);


//        String user = userRepository.findByUserId(userId).get().getUid();
//        String uid = userDto.getUserId().substring(1);
//        System.out.println(uid);

//        User user = userRepository.findByUserId(userId).get();
//        Optional<User> user = userRepository.findByUserId(userDto.getUserId());
        User usercur = userRepository.findByUserId(userDto.getUserId()).get();
        // 통신 I/O
        try {

//            File folder = new File(uploadFolder);
//            if(!folder.exists()) {
//                folder.mkdirs();
//            }
            Path imageFilePath = Paths.get(imageFileName);
            //파일권한적용
//            imageFilePath.setWritable(true); //쓰기가능설정
//            imageFilePath.setReadable(true);	//읽기가능설정
//            Files.write(imageFilePath, userProfilePhoto.getBytes());
//            userProfilePhoto.transferTo(imageFilePath);
//            System.out.println("사진은 저장 완료");

//            if(!Files.isDirectory(Paths.get(uploadFolder))) {
//            Files.createDirectories(Paths.get(uploadFolder));


//            final BufferedWriter out = Files.newBufferedWriter(
//                    imageFilePath,
//                    StandardCharsets.UTF_8,
//                    StandardOpenOption.CREATE,
//                    StandardOpenOption.APPEND);

            System.out.println("-----------------------------------");
            System.out.println("저장 완료");
            System.out.println("-----------------------------------");
            Files.write(imageFilePath, userProfilePhoto.getBytes());
//            byte[] image = Files.readAllBytes(imageFilePath);
//            System.out.println(image);
            // 업로드까지 간다음에 안에 파일들을 불러오자
            // uploadFolder
//            ListFile(uploadFolder);

//            BufferedImage image = ImageIO.read(userProfilePhoto);
//            System.out.println(image);
//            ImageIO.write(image , "jpg", new File("c:\\test\\image.jpg"));
//            userProfilePhoto.transferTo(imageFilePath);
            String path = imageFilePath.toAbsolutePath().toString();
            System.out.println("-----------------------------------");
            System.out.println("저장 한 경로: " + path);
            System.out.println("-----------------------------------");
//            System.out.println("저장 한 경로에서 파일 가져와 출력: " + out.toString());

//            ListFile(uploadFolder);
            File f = new File(".");
            System.out.println(f.getAbsolutePath()); // 현재 디렉토리 경로
//            File dir = new File(uploadFolder);
//            String[] filenames = dir.list();
//            for(String filename : filenames) {
//                System.out.println("filename: " + filename);
//            }
//            if(!Files.exists(imageFilePath)) {
//            Files.createFile(imageFilePath);
//            }

//            Files.createDirectories(imageFilePath.getParent());



            // db의 id 컬럼값으로 파일을 가져옴
            User user = User.builder()
                    .uid(usercur.getUid())
                    .userId(usercur.getUserId())
                    .password(usercur.getPassword())
                    .userNickname((usercur.getUserNickname()))
                    .userEmail((usercur.getUserEmail()))
                    .userBirthday((usercur.getUserBirthday()))
                    .userSex((usercur.getUserSex()))
                    .userProfilePhoto(String.valueOf(imageFilePath))
                    .build();

            System.out.println("저장전?");
            userRepository.save(user);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void ListFile( String strDirPath ) {
        File path = new File( strDirPath );
        File[] fList = path.listFiles();
        for( int i = 0; i < fList.length; i++ ) {
            if( fList[i].isFile() ) {
                System.out.println( fList[i].getPath() );
                // 파일의 FullPath 출력
            } else if( fList[i].isDirectory() ) {
                ListFile( fList[i].getPath() ); // 재귀함수 호출
            }
        }
    }


    @Override
    public String findid(String userEmail) throws Exception {
        String userId = userRepository.findByUserEmail(userEmail).get().getUserId();
        return userId;
    }

    // 비밀번호 변경
    @Transactional
    @Override
    public void modifyPassword(UserDto userDto) throws Exception {
        User usercur = userRepository.findByUserId(userDto.getUserId()).get();

        User user = User.builder()
                .uid(usercur.getUid())
                .userId(usercur.getUserId())
                .password(userDto.getPassword())
                .userNickname((usercur.getUserNickname()))
                .userEmail((usercur.getUserEmail()))
                .userBirthday((usercur.getUserBirthday()))
                .userSex((usercur.getUserSex()))
                .userProfilePhoto(usercur.getUserProfilePhoto())
                .build();

        // User에 user 정보 저장
        userRepository.save(user);
    }

}
