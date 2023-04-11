package com.smilegatetask.backend.user.vo;

import com.sun.istack.NotNull;
import lombok.*;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Component
@Lazy
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name="COUPON")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "COUPONSEQ")
    @NotNull
    private int couponSeq;
    @Column(name = "USERNAME", length = 20)
    @NotNull
    private String userName;
    @Column(name = "USERPHONE", length = 12)
    @NotNull
    private String userPhone;
    @Column(name = "COUPONCODE", length = 50)
    @NotNull
    private String couponCode;
    @Column(name = "INSTDATE", length = 25)
    @NotNull
    @CreatedDate
    private LocalDateTime instDate;

}
